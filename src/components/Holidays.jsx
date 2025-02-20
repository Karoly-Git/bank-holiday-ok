export default function Holidays({ events, selectedYear }) {
    const upcomingEventIndex = getUpcomingEventIndex();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getUpcomingEventIndex() {
        const today = new Date();
        if (selectedYear === String(today.getFullYear())) {
            return events.findIndex(event => new Date(event.date) > today);
        }
        return -1;
    };

    return (
        <div id="events-container">
            <ul>
                {events.map((event, index) => (
                    <li key={event.date} className={index === upcomingEventIndex ? "upcoming" : undefined}>
                        <div className="event-name">{index + 1}. &#41; {event.title}</div>
                        <div className="event-date">
                            {new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </div>
                        <div className="event-day">{dayNames[new Date(event.date).getDay()]}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
