//the users got copied and pasted into login.component.ts but im leaving this here incase we need it. Needs to get imported if this is going to get used -matt
export let USERS: any = [
    {
        username: 'mattmartin',
        password: '123',
        role: 'student',
        studentID: 1
    },
    {
        username: 'jarrettmeester',
        password: '456',
        role: 'advisor',
        advisorID: 1
    },
    {
        username: 'sampenney',
        password: '789',
        role: 'student',
        studentID: 2
    },
    {
        username: 'drewwickoren',
        password: '123',
        role: 'student',
        studentID: 3
    },
    {
        username: 'olsonlangness',
        password: '456',
        role: 'advisor',
        advisorID: 2
    },
]
//the appoints got copied and pasted into app.components.ts but im leaving this here incase we need to revert back. Needs to get imported if this is going to get used -matt
export let APPOINTMENTS: any =[
    {
        advisorID: 1,
        studentID: 1,
        appointmentID: 1,
        appointmentReason: 'Major',
        appointmentTime: new Date(2019, 5, 10, 13, 30, 0, 0)
    },
    {
        advisorID: 2,
        studentID: 2,
        appointmentID: 2,
        appointmentReason: 'Job',
        appointmentTime: new Date(2019, 5, 11, 14, 0, 0, 0)
    },
    {
        advisorID: 1,
        studentID: 3,
        appointmentID: 3,
        appointmentReason: 'Major',
        appointmentTime: new Date(2019, 5, 12, 15,30, 0, 0)
    }
]