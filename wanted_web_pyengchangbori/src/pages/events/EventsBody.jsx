import ChipScroll from 'pages/home/ChipScroll';
import React from 'react';
import styled from 'styled-components';
import EventChipScroll from './EventChipScroll';

function EventsBody() {
	return (
		<ComponentWrapper>
			<div className="events-evnetlist-container">
				<EventChipScroll url="/events" tag={0} />
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	/* min-height: calc(100vh - 282px); */
	padding-top: 59px;
	.events-evnetlist-container {
		max-width: 1060px;
		width: 87.72%;
		position: relative;
		margin: 0 auto;
	}
`;
export default EventsBody;
