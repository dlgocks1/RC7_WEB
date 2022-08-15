/* eslint-disable import/no-mutable-exports */
import Loading from 'components/common/Loading';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import useProfileData from 'hoc/useProfileData';
import React, { Suspense, useDeferredValue, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CareerConnectionBanner from './CareerConnectionBanner';
import { fetchProfileData, fetchUserProfile } from './fetchProfileData';
import ProfileAside from './ProfileAside';
import ProfileLevel1 from './ProfileLevel1';
import ProfileLevel2 from './ProfileLevel2';
import ProfileLevel3 from './ProfileLevel3';
import ProrfileLevel4 from './ProrfileLevel4';

const baseUserData = fetchUserProfile({ userId: 0, jwt: 0 });
const resumUserData = fetchProfileData({ userId: 0, jwt: 0 });

function ProfilePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const level = searchParams.get('level');
	const { userId, jwt } = useSelector((state) => state.UserDataReducer);
	const [baseUser, setBaseUser] = useState(fetchUserProfile({ userId, jwt }));
	const [resumeData, setResumeData] = useState(
		fetchProfileData({ userId, jwt }),
	);

	const [reload, setReload] = useState(5);

	useEffect(() => {
		setBaseUser(fetchUserProfile({ userId, jwt }));
	}, [reload]);

	return (
		<ErrorBoundary>
			<Suspense>
				<ComponentWrapper reload={reload}>
					<nav className="profile-title">
						<h2>
							<p>프로필</p>
						</h2>
					</nav>
					<div className="machup">
						<Suspense>
							<ProfileAside fetchTest={baseUser} />
						</Suspense>
						<section>
							<CareerConnectionBanner />

							<Suspense fallback={<Loading />}>
								{level === '4' && (
									<ProrfileLevel4 resumeData={resumeData} />
								)}
								{level === '3' && (
									<ProfileLevel3 resumeData={resumeData} />
								)}
								{level === '2' && (
									<ProfileLevel2 resumeData={resumeData} />
								)}
								{level === '1' && (
									<ProfileLevel1
										setReload={setReload}
										fetchTest={baseUser}
										userId={userId}
										jwt={jwt}
									/>
								)}
							</Suspense>
						</section>
					</div>
				</ComponentWrapper>
			</Suspense>
		</ErrorBoundary>
	);
}

const ComponentWrapper = styled.div`
	padding-bottom: 100px;
	margin: 0 auto;
	width: 87.72%;
	position: relative;
	max-width: 1060px;

	.machup {
		margin: 0 auto;
		max-width: 1060px;
		position: relative;
		> section {
			padding-left: 270px;
		}
	}
	.profile-title {
		position: relative;
		line-height: normal;
		p {
			font-size: 20px;
			font-weight: 700;
			color: #333;
			padding: 50px 0 20px;
		}
	}
`;

export default ProfilePage;
