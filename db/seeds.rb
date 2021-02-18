rooms = Room.create([
    {
        name: "Conference Room 1",
        floor: 8,
        capacity: 30,
        room_type: "conference",
        assets: {
            projector: true,
            whiteboard: true,
            power_outlets: true,
            tv: false,
        },
    },{
        name: "Conference Room 2",
        floor: 8,
        capacity: 30,
        room_type: "conference",
        assets: {
            projector: true,
            whiteboard: true,
            power_outlets: true, 
            tv: false,
        },
    },
        {
            name: "Sleeping Pod 1",
            floor: 4,
            capacity: 1,
            room_type: "sleeping_pod",
            assets: {
                projector: false,
                whiteboard: false,
                power_outlets: true,
                tv: false
            },},
            {
                name: "Small Meeting Room 2",
                floor: "8",
                capacity: 10,
                room_type: "small_meeting_room",
                assets: {
                    projector: true,
                    whiteboard: true,
                    power_outlets: true,
                    tv: true,
                }
    },
    {
        name: "Small Meeting Room 2",
        floor: "3",
        capacity: 10,
        room_type: "small_meeting_room",
        assets: {
            projector: true,
            whiteboard: true,
            power_outlets: true,
            tv: true,
        }
}, {
    name: "Sleeping Pod 2",
    floor: 4,
    capacity: 1,
    room_type: "sleeping_pod",
    assets: {
        projector: false,
        whiteboard: false,
        power_outlets: true,
        tv: false
    },},
])

users = User.create([
    {
        first_name: 'Tach',
        last_name: 'Anka',
        email: 'tach_anka@email.com'
    },
    {
        first_name: 'Jett',
        last_name: 'Fighter',
        email: 'jett_fighter@email.com'
    }
])

bookings = Booking.create([
    {
        title: 'Scrum Meeting',
        description: 'Scrum Meeting for Product Team',
        start_timestamp: DateTime.strptime("01/17/2021 17:00", "%m/%d/%Y %H:%M"),
        end_timestamp: DateTime.strptime("01/17/2021 18:00", "%m/%d/%Y %H:%M"),
        user: users.first,
        room: rooms.first,
    }, {
        title: 'Not Personal Call',
        description: 'Personal Call',
        start_timestamp: DateTime.strptime("01/17/2021 12:00", "%m/%d/%Y %H:%M"),
        end_timestamp: DateTime.strptime("01/17/2021 13:00", "%m/%d/%Y %H:%M"),
        user: users.first,
        room: rooms.fourth,
    }, {
        title: 'Nap Time',
        description: 'Please do not disturb',
        start_timestamp: DateTime.strptime("01/19/2021 13:00", "%m/%d/%Y %H:%M"),
        end_timestamp: DateTime.strptime("01/19/2021 13:30", "%m/%d/%Y %H:%M"),
        user: users.second,
        room: rooms.third,
    }
])

