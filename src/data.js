/**
 * This is our dummy database. 
 * 
 */

/**
  * API 1 Get list of physicians 
  */
export const PHYSICIANS = [
    {
        id: 1, 
        nameLast: 'Hibbert', 
        nameFirst: 'Julius',
        email: 'test1@notablehealth.com'
    },
    {
        id: 2, 
        nameLast: 'Kriegar', 
        nameFirst: 'Algernop',
        email: 'test2@notablehealth.com',
    },
    {
        id: 3, 
        nameLast: 'Riveria', 
        nameFirst: 'Nick',
        email: 'test3@notablehealth.com'
    }
]


/**
 * API 2 Get List of Physician Schedules 
 */


export const SCHEDULES = 
{ 1:[
    {
        patientName: 'Sterling Archer', 
        time: '8:00am',
        kind: 'New Patient',
      },
      {
        patientName: 'Sterling Archer', 
        time: '9:00am',
        kind: 'New Patient',
      },
      {
        patientName: 'Sterling Archer', 
        time: '10:00am',
        kind: 'New Patient',
      },
      {
        patientName: 'Sterling Archer', 
        time: '11:00am',
        kind: 'New Patient',
      },
      {
        patientName: 'Sterling Archer', 
        time: '11:30am',
        kind: 'New Patient',
      }
    ],
    2: [
        {
            patientName: 'Patient 4', 
            time: '8:00am',
            kind: 'New Patient',
          },
          {
            patientName: 'Patient 5', 
            time: '9:00am',
            kind: 'New Patient',
          },
          {
            patientName: 'Patient 7', 
            time: '10:00am',
            kind: 'New Patient',
          }
    ],
    3: []
}

