// School Management System — Seed Data (regenerated)
// Rules applied: single-subject teachers, level-locked (Junior 1-3 / Mid 4-7 / Senior 8-10),
// no teacher/class double-booking, full 8:00-14:00 weekly timetable (break 12:00-13:00),
// B/G sections per grade, sibling-only parents.

export const subjectsData = [
  {
    "id": 1,
    "name": "Art & Design",
    "teachers": [
      "Angela Wilson",
      "Kimberly Ross",
      "Richard Griffin"
    ]
  },
  {
    "id": 2,
    "name": "Biology",
    "teachers": [
      "Christopher Griffin",
      "Gary Morgan",
      "Ryan Collins"
    ]
  },
  {
    "id": 3,
    "name": "Chemistry",
    "teachers": [
      "Carolyn Rogers 2",
      "Ryan Campbell",
      "Samantha Baker"
    ]
  },
  {
    "id": 4,
    "name": "Computer Science",
    "teachers": [
      "Carolyn Reed",
      "Cynthia Butler",
      "Debra Carter",
      "Paul Wilson",
      "Rachel Henderson",
      "Sandra Lee",
      "Scott Butler"
    ]
  },
  {
    "id": 5,
    "name": "Economics",
    "teachers": [
      "Mary Powell",
      "Ryan Diaz"
    ]
  },
  {
    "id": 6,
    "name": "English Language",
    "teachers": [
      "Brian Morgan",
      "Carolyn Rogers",
      "Dorothy Powell",
      "Jason Watson",
      "Jerry Foster",
      "Kathleen Fisher",
      "Margaret Jackson",
      "Michael Ross",
      "Raymond Jackson"
    ]
  },
  {
    "id": 7,
    "name": "General Science",
    "teachers": [
      "Charles Moore",
      "Jennifer Griffin",
      "Jennifer King",
      "Jerry Bennett",
      "Justin Evans",
      "Michael Cruz",
      "Ryan Jackson",
      "Sandra Cox"
    ]
  },
  {
    "id": 8,
    "name": "Geography",
    "teachers": [
      "Benjamin Griffin",
      "Kathleen Foster",
      "Richard Morgan"
    ]
  },
  {
    "id": 9,
    "name": "Islamic Studies",
    "teachers": [
      "Anthony Ross",
      "Catherine Hall",
      "Gary Thompson",
      "Heather Morgan",
      "Linda Moore",
      "Nancy Baker",
      "Raymond Cruz",
      "Scott Evans"
    ]
  },
  {
    "id": 10,
    "name": "Mathematics",
    "teachers": [
      "Brian Collins",
      "Christine Rogers",
      "Jerry Butler",
      "Jerry Flores",
      "Jonathan Henderson",
      "Joseph Moore",
      "Kathleen Cox",
      "Melissa King",
      "Patricia Young",
      "Patrick Hill",
      "Scott Flores",
      "Timothy Diaz",
      "Timothy Watson"
    ]
  },
  {
    "id": 11,
    "name": "Pakistan Studies",
    "teachers": [
      "Amy Collins",
      "Dennis Griffin",
      "Emily Barnes",
      "Stephanie Thompson",
      "Stephanie Watson",
      "Susan Jackson"
    ]
  },
  {
    "id": 12,
    "name": "Physical Education",
    "teachers": [
      "George Barnes",
      "Karen Watson",
      "Linda Evans",
      "Rachel Ward",
      "Raymond Jackson 2",
      "Samantha Ross",
      "Scott Rogers",
      "Thomas Watson"
    ]
  },
  {
    "id": 13,
    "name": "Physics",
    "teachers": [
      "Christine Lee",
      "Frank Hill",
      "Timothy Moore"
    ]
  },
  {
    "id": 14,
    "name": "Social Studies",
    "teachers": [
      "Angela Rogers",
      "Anthony Fisher",
      "Barbara Lee",
      "Charles Baker",
      "Maria Diaz",
      "Rebecca Hill"
    ]
  },
  {
    "id": 15,
    "name": "Urdu Language",
    "teachers": [
      "Charles Barnes",
      "Cynthia Barnes",
      "Janet Henderson",
      "Jerry Bailey",
      "Joseph Henderson",
      "Mary Butler",
      "Shirley Butler",
      "Shirley Hill"
    ]
  }
];

export const teachersData = [
  {
    "id": 1,
    "name": "Jerry Butler",
    "email": "jerry.butler@school.com",
    "phone": "+92-300-766-1001",
    "photo": "https://i.pravatar.cc/300?img=2",
    "subject": "Mathematics",
    "level": "Junior",
    "classes": [
      "1B",
      "3B"
    ],
    "address": "13 Church Road, Leeds"
  },
  {
    "id": 2,
    "name": "Jonathan Henderson",
    "email": "jonathan.henderson@school.com",
    "phone": "+92-300-619-1002",
    "photo": "https://i.pravatar.cc/300?img=3",
    "subject": "Mathematics",
    "level": "Junior",
    "classes": [
      "1G",
      "2B"
    ],
    "address": "55 High Street, Manchester"
  },
  {
    "id": 3,
    "name": "Raymond Jackson",
    "email": "raymond.jackson@school.com",
    "phone": "+92-300-192-1003",
    "photo": "https://i.pravatar.cc/300?img=4",
    "subject": "English Language",
    "level": "Junior",
    "classes": [
      "1B",
      "3B"
    ],
    "address": "142 King Street, London"
  },
  {
    "id": 4,
    "name": "Carolyn Rogers",
    "email": "carolyn.rogers@school.com",
    "phone": "+92-300-745-1004",
    "photo": "https://i.pravatar.cc/300?img=5",
    "subject": "English Language",
    "level": "Junior",
    "classes": [
      "1G",
      "2B",
      "2G"
    ],
    "address": "161 Mill Lane, London"
  },
  {
    "id": 5,
    "name": "Janet Henderson",
    "email": "janet.henderson@school.com",
    "phone": "+92-300-326-1005",
    "photo": "https://i.pravatar.cc/300?img=6",
    "subject": "Urdu Language",
    "level": "Junior",
    "classes": [
      "1B",
      "2B"
    ],
    "address": "12 Green Lane, Chicago"
  },
  {
    "id": 6,
    "name": "Jerry Bailey",
    "email": "jerry.bailey@school.com",
    "phone": "+92-300-220-1006",
    "photo": "https://i.pravatar.cc/300?img=7",
    "subject": "Urdu Language",
    "level": "Junior",
    "classes": [
      "1G",
      "2G",
      "3B"
    ],
    "address": "147 Birch Drive, Leeds"
  },
  {
    "id": 7,
    "name": "Catherine Hall",
    "email": "catherine.hall@school.com",
    "phone": "+92-300-695-1007",
    "photo": "https://i.pravatar.cc/300?img=8",
    "subject": "Islamic Studies",
    "level": "Junior",
    "classes": [
      "1B",
      "2G",
      "3B"
    ],
    "address": "147 Pine Road, Denver"
  },
  {
    "id": 8,
    "name": "Raymond Cruz",
    "email": "raymond.cruz@school.com",
    "phone": "+92-300-161-1008",
    "photo": "https://i.pravatar.cc/300?img=9",
    "subject": "Islamic Studies",
    "level": "Junior",
    "classes": [
      "1G",
      "2B",
      "3G"
    ],
    "address": "159 Pine Road, Birmingham"
  },
  {
    "id": 9,
    "name": "Sandra Cox",
    "email": "sandra.cox@school.com",
    "phone": "+92-300-576-1009",
    "photo": "https://i.pravatar.cc/300?img=10",
    "subject": "General Science",
    "level": "Junior",
    "classes": [
      "1B",
      "3G"
    ],
    "address": "150 Bridge Street, Denver"
  },
  {
    "id": 10,
    "name": "Ryan Jackson",
    "email": "ryan.jackson@school.com",
    "phone": "+92-300-183-1010",
    "photo": "https://i.pravatar.cc/300?img=11",
    "subject": "General Science",
    "level": "Junior",
    "classes": [
      "1G",
      "2G"
    ],
    "address": "148 Birch Drive, Leeds"
  },
  {
    "id": 11,
    "name": "Charles Baker",
    "email": "charles.baker@school.com",
    "phone": "+92-300-394-1011",
    "photo": "https://i.pravatar.cc/300?img=12",
    "subject": "Social Studies",
    "level": "Junior",
    "classes": [
      "1B",
      "2G",
      "3B"
    ],
    "address": "156 Church Road, Manchester"
  },
  {
    "id": 12,
    "name": "Barbara Lee",
    "email": "barbara.lee@school.com",
    "phone": "+92-300-255-1012",
    "photo": "https://i.pravatar.cc/300?img=13",
    "subject": "Social Studies",
    "level": "Junior",
    "classes": [
      "1G",
      "2B",
      "3G"
    ],
    "address": "126 King Street, London"
  },
  {
    "id": 13,
    "name": "Rachel Ward",
    "email": "rachel.ward@school.com",
    "phone": "+92-300-686-1013",
    "photo": "https://i.pravatar.cc/300?img=14",
    "subject": "Physical Education",
    "level": "Junior",
    "classes": [
      "1B",
      "2G"
    ],
    "address": "81 Willow Way, Denver"
  },
  {
    "id": 14,
    "name": "Samantha Ross",
    "email": "samantha.ross@school.com",
    "phone": "+92-300-170-1014",
    "photo": "https://i.pravatar.cc/300?img=15",
    "subject": "Physical Education",
    "level": "Junior",
    "classes": [
      "1G",
      "2B"
    ],
    "address": "24 Cedar Lane, Birmingham"
  },
  {
    "id": 15,
    "name": "Rachel Henderson",
    "email": "rachel.henderson@school.com",
    "phone": "+92-300-848-1015",
    "photo": "https://i.pravatar.cc/300?img=16",
    "subject": "Computer Science",
    "level": "Junior",
    "classes": [
      "1B",
      "3B",
      "3G"
    ],
    "address": "180 Birch Drive, Glasgow"
  },
  {
    "id": 16,
    "name": "Debra Carter",
    "email": "debra.carter@school.com",
    "phone": "+92-300-833-1016",
    "photo": "https://i.pravatar.cc/300?img=17",
    "subject": "Computer Science",
    "level": "Junior",
    "classes": [
      "1G",
      "2B",
      "2G"
    ],
    "address": "99 Victoria Street, London"
  },
  {
    "id": 17,
    "name": "Angela Wilson",
    "email": "angela.wilson@school.com",
    "phone": "+92-300-725-1017",
    "photo": "https://i.pravatar.cc/300?img=18",
    "subject": "Art & Design",
    "level": "Junior",
    "classes": [
      "1B",
      "3B"
    ],
    "address": "30 Station Road, London"
  },
  {
    "id": 18,
    "name": "Richard Griffin",
    "email": "richard.griffin@school.com",
    "phone": "+92-300-856-1018",
    "photo": "https://i.pravatar.cc/300?img=19",
    "subject": "Art & Design",
    "level": "Junior",
    "classes": [
      "1G",
      "2B"
    ],
    "address": "64 Queen Street, Austin"
  },
  {
    "id": 19,
    "name": "Melissa King",
    "email": "melissa.king@school.com",
    "phone": "+92-300-270-1019",
    "photo": "https://i.pravatar.cc/300?img=20",
    "subject": "Mathematics",
    "level": "Mid",
    "classes": [
      "4B"
    ],
    "address": "115 Queen Street, Leeds"
  },
  {
    "id": 20,
    "name": "Brian Collins",
    "email": "brian.collins@school.com",
    "phone": "+92-300-984-1020",
    "photo": "https://i.pravatar.cc/300?img=21",
    "subject": "Mathematics",
    "level": "Mid",
    "classes": [
      "4G",
      "7G"
    ],
    "address": "141 Cedar Lane, Austin"
  },
  {
    "id": 21,
    "name": "Christine Rogers",
    "email": "christine.rogers@school.com",
    "phone": "+92-300-254-1021",
    "photo": "https://i.pravatar.cc/300?img=22",
    "subject": "Mathematics",
    "level": "Mid",
    "classes": [
      "5B",
      "6B"
    ],
    "address": "22 Elm Street, Chicago"
  },
  {
    "id": 22,
    "name": "Jason Watson",
    "email": "jason.watson@school.com",
    "phone": "+92-300-596-1022",
    "photo": "https://i.pravatar.cc/300?img=23",
    "subject": "English Language",
    "level": "Mid",
    "classes": [
      "4B",
      "7B"
    ],
    "address": "151 Elm Street, Seattle"
  },
  {
    "id": 23,
    "name": "Jerry Foster",
    "email": "jerry.foster@school.com",
    "phone": "+92-300-647-1023",
    "photo": "https://i.pravatar.cc/300?img=24",
    "subject": "English Language",
    "level": "Mid",
    "classes": [
      "4G",
      "6B",
      "6G"
    ],
    "address": "95 Sycamore Close, Glasgow"
  },
  {
    "id": 24,
    "name": "Brian Morgan",
    "email": "brian.morgan@school.com",
    "phone": "+92-300-732-1024",
    "photo": "https://i.pravatar.cc/300?img=25",
    "subject": "English Language",
    "level": "Mid",
    "classes": [
      "5B",
      "5G",
      "7G"
    ],
    "address": "168 High Street, Birmingham"
  },
  {
    "id": 25,
    "name": "Shirley Butler",
    "email": "shirley.butler@school.com",
    "phone": "+92-300-507-1025",
    "photo": "https://i.pravatar.cc/300?img=26",
    "subject": "Urdu Language",
    "level": "Mid",
    "classes": [
      "4B",
      "6B"
    ],
    "address": "103 Queen Street, Manchester"
  },
  {
    "id": 26,
    "name": "Joseph Henderson",
    "email": "joseph.henderson@school.com",
    "phone": "+92-300-295-1026",
    "photo": "https://i.pravatar.cc/300?img=27",
    "subject": "Urdu Language",
    "level": "Mid",
    "classes": [
      "4G",
      "5G",
      "7G"
    ],
    "address": "18 Pine Road, Birmingham"
  },
  {
    "id": 27,
    "name": "Charles Barnes",
    "email": "charles.barnes@school.com",
    "phone": "+92-300-153-1027",
    "photo": "https://i.pravatar.cc/300?img=28",
    "subject": "Urdu Language",
    "level": "Mid",
    "classes": [
      "5B",
      "6G",
      "7B"
    ],
    "address": "27 Main St, Glasgow"
  },
  {
    "id": 28,
    "name": "Scott Evans",
    "email": "scott.evans@school.com",
    "phone": "+92-300-728-1028",
    "photo": "https://i.pravatar.cc/300?img=29",
    "subject": "Islamic Studies",
    "level": "Mid",
    "classes": [
      "4B",
      "7G"
    ],
    "address": "7 Church Road, Boston"
  },
  {
    "id": 29,
    "name": "Linda Moore",
    "email": "linda.moore@school.com",
    "phone": "+92-300-455-1029",
    "photo": "https://i.pravatar.cc/300?img=30",
    "subject": "Islamic Studies",
    "level": "Mid",
    "classes": [
      "4G",
      "6B",
      "6G"
    ],
    "address": "155 Victoria Street, Birmingham"
  },
  {
    "id": 30,
    "name": "Anthony Ross",
    "email": "anthony.ross@school.com",
    "phone": "+92-300-591-1030",
    "photo": "https://i.pravatar.cc/300?img=31",
    "subject": "Islamic Studies",
    "level": "Mid",
    "classes": [
      "5B",
      "5G",
      "7B"
    ],
    "address": "124 Birch Drive, Manchester"
  },
  {
    "id": 31,
    "name": "Charles Moore",
    "email": "charles.moore@school.com",
    "phone": "+92-300-590-1031",
    "photo": "https://i.pravatar.cc/300?img=32",
    "subject": "General Science",
    "level": "Mid",
    "classes": [
      "4B",
      "6B"
    ],
    "address": "178 Elm Street, Leeds"
  },
  {
    "id": 32,
    "name": "Justin Evans",
    "email": "justin.evans@school.com",
    "phone": "+92-300-250-1032",
    "photo": "https://i.pravatar.cc/300?img=33",
    "subject": "General Science",
    "level": "Mid",
    "classes": [
      "4G",
      "5G"
    ],
    "address": "177 Green Lane, London"
  },
  {
    "id": 33,
    "name": "Jennifer King",
    "email": "jennifer.king@school.com",
    "phone": "+92-300-812-1033",
    "photo": "https://i.pravatar.cc/300?img=34",
    "subject": "General Science",
    "level": "Mid",
    "classes": [
      "5B",
      "6G"
    ],
    "address": "67 Chestnut Grove, Denver"
  },
  {
    "id": 34,
    "name": "Angela Rogers",
    "email": "angela.rogers@school.com",
    "phone": "+92-300-645-1034",
    "photo": "https://i.pravatar.cc/300?img=35",
    "subject": "Social Studies",
    "level": "Mid",
    "classes": [
      "4B",
      "6G"
    ],
    "address": "139 Chestnut Grove, Denver"
  },
  {
    "id": 35,
    "name": "Maria Diaz",
    "email": "maria.diaz@school.com",
    "phone": "+92-300-925-1035",
    "photo": "https://i.pravatar.cc/300?img=36",
    "subject": "Social Studies",
    "level": "Mid",
    "classes": [
      "4G",
      "6B"
    ],
    "address": "62 Queen Street, Boston"
  },
  {
    "id": 36,
    "name": "Anthony Fisher",
    "email": "anthony.fisher@school.com",
    "phone": "+92-300-848-1036",
    "photo": "https://i.pravatar.cc/300?img=37",
    "subject": "Social Studies",
    "level": "Mid",
    "classes": [
      "5B",
      "5G"
    ],
    "address": "8 Main St, Seattle"
  },
  {
    "id": 37,
    "name": "George Barnes",
    "email": "george.barnes@school.com",
    "phone": "+92-300-452-1037",
    "photo": "https://i.pravatar.cc/300?img=38",
    "subject": "Physical Education",
    "level": "Mid",
    "classes": [
      "4B",
      "6G",
      "7B"
    ],
    "address": "115 Victoria Street, Denver"
  },
  {
    "id": 38,
    "name": "Scott Rogers",
    "email": "scott.rogers@school.com",
    "phone": "+92-300-581-1038",
    "photo": "https://i.pravatar.cc/300?img=39",
    "subject": "Physical Education",
    "level": "Mid",
    "classes": [
      "4G",
      "6B"
    ],
    "address": "51 Willow Way, Boston"
  },
  {
    "id": 39,
    "name": "Thomas Watson",
    "email": "thomas.watson@school.com",
    "phone": "+92-300-590-1039",
    "photo": "https://i.pravatar.cc/300?img=40",
    "subject": "Physical Education",
    "level": "Mid",
    "classes": [
      "5B",
      "5G",
      "7G"
    ],
    "address": "168 Victoria Street, Manchester"
  },
  {
    "id": 40,
    "name": "Carolyn Reed",
    "email": "carolyn.reed@school.com",
    "phone": "+92-300-901-1040",
    "photo": "https://i.pravatar.cc/300?img=41",
    "subject": "Computer Science",
    "level": "Mid",
    "classes": [
      "4B",
      "6G",
      "7B"
    ],
    "address": "183 Pine Road, Birmingham"
  },
  {
    "id": 41,
    "name": "Sandra Lee",
    "email": "sandra.lee@school.com",
    "phone": "+92-300-188-1041",
    "photo": "https://i.pravatar.cc/300?img=42",
    "subject": "Computer Science",
    "level": "Mid",
    "classes": [
      "4G",
      "6B",
      "7G"
    ],
    "address": "185 Queen Street, Birmingham"
  },
  {
    "id": 42,
    "name": "Paul Wilson",
    "email": "paul.wilson@school.com",
    "phone": "+92-300-274-1042",
    "photo": "https://i.pravatar.cc/300?img=43",
    "subject": "Computer Science",
    "level": "Mid",
    "classes": [
      "5B",
      "5G"
    ],
    "address": "33 Main St, Chicago"
  },
  {
    "id": 43,
    "name": "Stephanie Thompson",
    "email": "stephanie.thompson@school.com",
    "phone": "+92-300-726-1043",
    "photo": "https://i.pravatar.cc/300?img=44",
    "subject": "Pakistan Studies",
    "level": "Mid",
    "classes": [
      "4B"
    ],
    "address": "153 Station Road, Denver"
  },
  {
    "id": 44,
    "name": "Dennis Griffin",
    "email": "dennis.griffin@school.com",
    "phone": "+92-300-121-1044",
    "photo": "https://i.pravatar.cc/300?img=45",
    "subject": "Pakistan Studies",
    "level": "Mid",
    "classes": [
      "4G",
      "6B",
      "6G"
    ],
    "address": "4 Park Avenue, Leeds"
  },
  {
    "id": 45,
    "name": "Amy Collins",
    "email": "amy.collins@school.com",
    "phone": "+92-300-992-1045",
    "photo": "https://i.pravatar.cc/300?img=46",
    "subject": "Pakistan Studies",
    "level": "Mid",
    "classes": [
      "5B",
      "5G",
      "7B"
    ],
    "address": "50 Pine Road, London"
  },
  {
    "id": 46,
    "name": "Richard Morgan",
    "email": "richard.morgan@school.com",
    "phone": "+92-300-346-1046",
    "photo": "https://i.pravatar.cc/300?img=47",
    "subject": "Geography",
    "level": "Mid",
    "classes": [
      "4B",
      "6B",
      "7B"
    ],
    "address": "196 Mill Lane, Denver"
  },
  {
    "id": 47,
    "name": "Benjamin Griffin",
    "email": "benjamin.griffin@school.com",
    "phone": "+92-300-162-1047",
    "photo": "https://i.pravatar.cc/300?img=48",
    "subject": "Geography",
    "level": "Mid",
    "classes": [
      "4G",
      "6G",
      "7G"
    ],
    "address": "190 Victoria Street, Birmingham"
  },
  {
    "id": 48,
    "name": "Kathleen Foster",
    "email": "kathleen.foster@school.com",
    "phone": "+92-300-946-1048",
    "photo": "https://i.pravatar.cc/300?img=49",
    "subject": "Geography",
    "level": "Mid",
    "classes": [
      "5B",
      "5G"
    ],
    "address": "129 Oak Avenue, Leeds"
  },
  {
    "id": 49,
    "name": "Patrick Hill",
    "email": "patrick.hill@school.com",
    "phone": "+92-300-993-1049",
    "photo": "https://i.pravatar.cc/300?img=50",
    "subject": "Mathematics",
    "level": "Senior",
    "classes": [
      "8B",
      "10B"
    ],
    "address": "113 Elm Street, Glasgow"
  },
  {
    "id": 50,
    "name": "Jerry Flores",
    "email": "jerry.flores@school.com",
    "phone": "+92-300-244-1050",
    "photo": "https://i.pravatar.cc/300?img=51",
    "subject": "Mathematics",
    "level": "Senior",
    "classes": [
      "8G",
      "9B"
    ],
    "address": "122 Sycamore Close, Manchester"
  },
  {
    "id": 51,
    "name": "Dorothy Powell",
    "email": "dorothy.powell@school.com",
    "phone": "+92-300-643-1051",
    "photo": "https://i.pravatar.cc/300?img=52",
    "subject": "English Language",
    "level": "Senior",
    "classes": [
      "8B",
      "9B"
    ],
    "address": "143 Station Road, Manchester"
  },
  {
    "id": 52,
    "name": "Margaret Jackson",
    "email": "margaret.jackson@school.com",
    "phone": "+92-300-295-1052",
    "photo": "https://i.pravatar.cc/300?img=53",
    "subject": "English Language",
    "level": "Senior",
    "classes": [
      "8G",
      "9G",
      "10B"
    ],
    "address": "71 High Street, Manchester"
  },
  {
    "id": 53,
    "name": "Shirley Hill",
    "email": "shirley.hill@school.com",
    "phone": "+92-300-878-1053",
    "photo": "https://i.pravatar.cc/300?img=54",
    "subject": "Urdu Language",
    "level": "Senior",
    "classes": [
      "8B",
      "9G",
      "10B"
    ],
    "address": "17 Bridge Street, Denver"
  },
  {
    "id": 54,
    "name": "Cynthia Barnes",
    "email": "cynthia.barnes@school.com",
    "phone": "+92-300-624-1054",
    "photo": "https://i.pravatar.cc/300?img=55",
    "subject": "Urdu Language",
    "level": "Senior",
    "classes": [
      "8G",
      "9B",
      "10G"
    ],
    "address": "52 Cedar Lane, Birmingham"
  },
  {
    "id": 55,
    "name": "Heather Morgan",
    "email": "heather.morgan@school.com",
    "phone": "+92-300-353-1055",
    "photo": "https://i.pravatar.cc/300?img=56",
    "subject": "Islamic Studies",
    "level": "Senior",
    "classes": [
      "8B",
      "9G",
      "10B"
    ],
    "address": "179 Chestnut Grove, Seattle"
  },
  {
    "id": 56,
    "name": "Nancy Baker",
    "email": "nancy.baker@school.com",
    "phone": "+92-300-240-1056",
    "photo": "https://i.pravatar.cc/300?img=57",
    "subject": "Islamic Studies",
    "level": "Senior",
    "classes": [
      "8G",
      "9B"
    ],
    "address": "107 Park Avenue, Austin"
  },
  {
    "id": 57,
    "name": "Raymond Jackson 2",
    "email": "raymond.jackson2@school.com",
    "phone": "+92-300-538-1057",
    "photo": "https://i.pravatar.cc/300?img=58",
    "subject": "Physical Education",
    "level": "Senior",
    "classes": [
      "8B",
      "9G",
      "10G"
    ],
    "address": "19 Pine Road, Seattle"
  },
  {
    "id": 58,
    "name": "Linda Evans",
    "email": "linda.evans@school.com",
    "phone": "+92-300-246-1058",
    "photo": "https://i.pravatar.cc/300?img=59",
    "subject": "Physical Education",
    "level": "Senior",
    "classes": [
      "8G",
      "9B",
      "10B"
    ],
    "address": "65 Oak Avenue, Birmingham"
  },
  {
    "id": 59,
    "name": "Scott Butler",
    "email": "scott.butler@school.com",
    "phone": "+92-300-598-1059",
    "photo": "https://i.pravatar.cc/300?img=60",
    "subject": "Computer Science",
    "level": "Senior",
    "classes": [
      "8B",
      "10B",
      "10G"
    ],
    "address": "42 Maple Street, Chicago"
  },
  {
    "id": 60,
    "name": "Cynthia Butler",
    "email": "cynthia.butler@school.com",
    "phone": "+92-300-447-1060",
    "photo": "https://i.pravatar.cc/300?img=61",
    "subject": "Computer Science",
    "level": "Senior",
    "classes": [
      "8G",
      "9B",
      "9G"
    ],
    "address": "108 Pine Road, Denver"
  },
  {
    "id": 61,
    "name": "Frank Hill",
    "email": "frank.hill@school.com",
    "phone": "+92-300-446-1061",
    "photo": "https://i.pravatar.cc/300?img=62",
    "subject": "Physics",
    "level": "Senior",
    "classes": [
      "8B",
      "9G"
    ],
    "address": "142 Bridge Street, Birmingham"
  },
  {
    "id": 62,
    "name": "Christine Lee",
    "email": "christine.lee@school.com",
    "phone": "+92-300-629-1062",
    "photo": "https://i.pravatar.cc/300?img=63",
    "subject": "Physics",
    "level": "Senior",
    "classes": [
      "8G",
      "9B"
    ],
    "address": "160 Birch Drive, Leeds"
  },
  {
    "id": 63,
    "name": "Carolyn Rogers 2",
    "email": "carolyn.rogers2@school.com",
    "phone": "+92-300-997-1063",
    "photo": "https://i.pravatar.cc/300?img=64",
    "subject": "Chemistry",
    "level": "Senior",
    "classes": [
      "8B",
      "9G"
    ],
    "address": "27 Church Road, Seattle"
  },
  {
    "id": 64,
    "name": "Ryan Campbell",
    "email": "ryan.campbell@school.com",
    "phone": "+92-300-873-1064",
    "photo": "https://i.pravatar.cc/300?img=65",
    "subject": "Chemistry",
    "level": "Senior",
    "classes": [
      "8G",
      "9B"
    ],
    "address": "34 King Street, Seattle"
  },
  {
    "id": 65,
    "name": "Gary Morgan",
    "email": "gary.morgan@school.com",
    "phone": "+92-300-684-1065",
    "photo": "https://i.pravatar.cc/300?img=66",
    "subject": "Biology",
    "level": "Senior",
    "classes": [
      "8B",
      "10B"
    ],
    "address": "127 Willow Way, Manchester"
  },
  {
    "id": 66,
    "name": "Ryan Collins",
    "email": "ryan.collins@school.com",
    "phone": "+92-300-174-1066",
    "photo": "https://i.pravatar.cc/300?img=67",
    "subject": "Biology",
    "level": "Senior",
    "classes": [
      "8G",
      "9B",
      "10G"
    ],
    "address": "69 Main St, Manchester"
  },
  {
    "id": 67,
    "name": "Emily Barnes",
    "email": "emily.barnes@school.com",
    "phone": "+92-300-976-1067",
    "photo": "https://i.pravatar.cc/300?img=68",
    "subject": "Pakistan Studies",
    "level": "Senior",
    "classes": [
      "8B",
      "10B",
      "10G"
    ],
    "address": "57 Church Road, Seattle"
  },
  {
    "id": 68,
    "name": "Stephanie Watson",
    "email": "stephanie.watson@school.com",
    "phone": "+92-300-447-1068",
    "photo": "https://i.pravatar.cc/300?img=69",
    "subject": "Pakistan Studies",
    "level": "Senior",
    "classes": [
      "8G",
      "9B",
      "9G"
    ],
    "address": "142 King Street, Seattle"
  },
  {
    "id": 69,
    "name": "Mary Powell",
    "email": "mary.powell@school.com",
    "phone": "+92-300-826-1069",
    "photo": "https://i.pravatar.cc/300?img=70",
    "subject": "Economics",
    "level": "Senior",
    "classes": [
      "8B",
      "9G",
      "10B"
    ],
    "address": "62 Park Avenue, Chicago"
  },
  {
    "id": 70,
    "name": "Ryan Diaz",
    "email": "ryan.diaz@school.com",
    "phone": "+92-300-419-1070",
    "photo": "https://i.pravatar.cc/300?img=1",
    "subject": "Economics",
    "level": "Senior",
    "classes": [
      "8G",
      "9B",
      "10G"
    ],
    "address": "161 Birch Drive, Leeds"
  },
  {
    "id": 71,
    "name": "Jennifer Griffin",
    "email": "jennifer.griffin@school.com",
    "phone": "+92-300-741-1071",
    "photo": "https://i.pravatar.cc/300?img=2",
    "subject": "General Science",
    "level": "Junior",
    "classes": [
      "2B"
    ],
    "address": "65 Chestnut Grove, Austin"
  },
  {
    "id": 72,
    "name": "Joseph Moore",
    "email": "joseph.moore@school.com",
    "phone": "+92-300-351-1072",
    "photo": "https://i.pravatar.cc/300?img=3",
    "subject": "Mathematics",
    "level": "Junior",
    "classes": [
      "2G"
    ],
    "address": "130 Chestnut Grove, Boston"
  },
  {
    "id": 73,
    "name": "Kimberly Ross",
    "email": "kimberly.ross@school.com",
    "phone": "+92-300-137-1073",
    "photo": "https://i.pravatar.cc/300?img=4",
    "subject": "Art & Design",
    "level": "Junior",
    "classes": [
      "2G",
      "3G"
    ],
    "address": "27 Main St, Birmingham"
  },
  {
    "id": 74,
    "name": "Jerry Bennett",
    "email": "jerry.bennett@school.com",
    "phone": "+92-300-308-1074",
    "photo": "https://i.pravatar.cc/300?img=5",
    "subject": "General Science",
    "level": "Junior",
    "classes": [
      "3B"
    ],
    "address": "66 High Street, Glasgow"
  },
  {
    "id": 75,
    "name": "Karen Watson",
    "email": "karen.watson@school.com",
    "phone": "+92-300-938-1075",
    "photo": "https://i.pravatar.cc/300?img=6",
    "subject": "Physical Education",
    "level": "Junior",
    "classes": [
      "3B",
      "3G"
    ],
    "address": "84 King Street, Denver"
  },
  {
    "id": 76,
    "name": "Mary Butler",
    "email": "mary.butler@school.com",
    "phone": "+92-300-630-1076",
    "photo": "https://i.pravatar.cc/300?img=7",
    "subject": "Urdu Language",
    "level": "Junior",
    "classes": [
      "3G"
    ],
    "address": "41 Queen Street, Denver"
  },
  {
    "id": 77,
    "name": "Timothy Diaz",
    "email": "timothy.diaz@school.com",
    "phone": "+92-300-142-1077",
    "photo": "https://i.pravatar.cc/300?img=8",
    "subject": "Mathematics",
    "level": "Junior",
    "classes": [
      "3G"
    ],
    "address": "144 High Street, Denver"
  },
  {
    "id": 78,
    "name": "Michael Ross",
    "email": "michael.ross@school.com",
    "phone": "+92-300-663-1078",
    "photo": "https://i.pravatar.cc/300?img=9",
    "subject": "English Language",
    "level": "Junior",
    "classes": [
      "3G"
    ],
    "address": "161 Birch Drive, Austin"
  },
  {
    "id": 79,
    "name": "Kathleen Cox",
    "email": "kathleen.cox@school.com",
    "phone": "+92-300-588-1079",
    "photo": "https://i.pravatar.cc/300?img=10",
    "subject": "Mathematics",
    "level": "Mid",
    "classes": [
      "5G"
    ],
    "address": "130 Mill Lane, Boston"
  },
  {
    "id": 80,
    "name": "Patricia Young",
    "email": "patricia.young@school.com",
    "phone": "+92-300-733-1080",
    "photo": "https://i.pravatar.cc/300?img=11",
    "subject": "Mathematics",
    "level": "Mid",
    "classes": [
      "6G"
    ],
    "address": "96 Oak Avenue, Birmingham"
  },
  {
    "id": 81,
    "name": "Rebecca Hill",
    "email": "rebecca.hill@school.com",
    "phone": "+92-300-198-1081",
    "photo": "https://i.pravatar.cc/300?img=12",
    "subject": "Social Studies",
    "level": "Mid",
    "classes": [
      "7B",
      "7G"
    ],
    "address": "179 Pine Road, Seattle"
  },
  {
    "id": 82,
    "name": "Michael Cruz",
    "email": "michael.cruz@school.com",
    "phone": "+92-300-575-1082",
    "photo": "https://i.pravatar.cc/300?img=13",
    "subject": "General Science",
    "level": "Mid",
    "classes": [
      "7B",
      "7G"
    ],
    "address": "134 Maple Street, Birmingham"
  },
  {
    "id": 83,
    "name": "Scott Flores",
    "email": "scott.flores@school.com",
    "phone": "+92-300-146-1083",
    "photo": "https://i.pravatar.cc/300?img=14",
    "subject": "Mathematics",
    "level": "Mid",
    "classes": [
      "7B"
    ],
    "address": "70 Park Avenue, Birmingham"
  },
  {
    "id": 84,
    "name": "Susan Jackson",
    "email": "susan.jackson@school.com",
    "phone": "+92-300-853-1084",
    "photo": "https://i.pravatar.cc/300?img=15",
    "subject": "Pakistan Studies",
    "level": "Mid",
    "classes": [
      "7G"
    ],
    "address": "23 Green Lane, Seattle"
  },
  {
    "id": 85,
    "name": "Christopher Griffin",
    "email": "christopher.griffin@school.com",
    "phone": "+92-300-239-1085",
    "photo": "https://i.pravatar.cc/300?img=16",
    "subject": "Biology",
    "level": "Senior",
    "classes": [
      "9G"
    ],
    "address": "176 Station Road, Birmingham"
  },
  {
    "id": 86,
    "name": "Timothy Watson",
    "email": "timothy.watson@school.com",
    "phone": "+92-300-627-1086",
    "photo": "https://i.pravatar.cc/300?img=17",
    "subject": "Mathematics",
    "level": "Senior",
    "classes": [
      "9G",
      "10G"
    ],
    "address": "178 Bridge Street, Chicago"
  },
  {
    "id": 87,
    "name": "Timothy Moore",
    "email": "timothy.moore@school.com",
    "phone": "+92-300-462-1087",
    "photo": "https://i.pravatar.cc/300?img=18",
    "subject": "Physics",
    "level": "Senior",
    "classes": [
      "10B",
      "10G"
    ],
    "address": "50 Bridge Street, London"
  },
  {
    "id": 88,
    "name": "Samantha Baker",
    "email": "samantha.baker@school.com",
    "phone": "+92-300-216-1088",
    "photo": "https://i.pravatar.cc/300?img=19",
    "subject": "Chemistry",
    "level": "Senior",
    "classes": [
      "10B",
      "10G"
    ],
    "address": "6 Station Road, Manchester"
  },
  {
    "id": 89,
    "name": "Gary Thompson",
    "email": "gary.thompson@school.com",
    "phone": "+92-300-748-1089",
    "photo": "https://i.pravatar.cc/300?img=20",
    "subject": "Islamic Studies",
    "level": "Senior",
    "classes": [
      "10G"
    ],
    "address": "189 Green Lane, Leeds"
  },
  {
    "id": 90,
    "name": "Kathleen Fisher",
    "email": "kathleen.fisher@school.com",
    "phone": "+92-300-959-1090",
    "photo": "https://i.pravatar.cc/300?img=21",
    "subject": "English Language",
    "level": "Senior",
    "classes": [
      "10G"
    ],
    "address": "128 Church Road, Denver"
  }
];

export const classesData = [
  {
    "id": 1,
    "name": "1B",
    "grade": 1,
    "section": "Boys",
    "capacity": 15,
    "supervisor": "Janet Henderson"
  },
  {
    "id": 2,
    "name": "1G",
    "grade": 1,
    "section": "Girls",
    "capacity": 19,
    "supervisor": "Jerry Bailey"
  },
  {
    "id": 3,
    "name": "2B",
    "grade": 2,
    "section": "Boys",
    "capacity": 12,
    "supervisor": "Carolyn Rogers"
  },
  {
    "id": 4,
    "name": "2G",
    "grade": 2,
    "section": "Girls",
    "capacity": 20,
    "supervisor": "Jerry Bailey"
  },
  {
    "id": 5,
    "name": "3B",
    "grade": 3,
    "section": "Boys",
    "capacity": 13,
    "supervisor": "Charles Baker"
  },
  {
    "id": 6,
    "name": "3G",
    "grade": 3,
    "section": "Girls",
    "capacity": 14,
    "supervisor": "Barbara Lee"
  },
  {
    "id": 7,
    "name": "4B",
    "grade": 4,
    "section": "Boys",
    "capacity": 15,
    "supervisor": "Jason Watson"
  },
  {
    "id": 8,
    "name": "4G",
    "grade": 4,
    "section": "Girls",
    "capacity": 14,
    "supervisor": "Joseph Henderson"
  },
  {
    "id": 9,
    "name": "5B",
    "grade": 5,
    "section": "Boys",
    "capacity": 15,
    "supervisor": "Anthony Fisher"
  },
  {
    "id": 10,
    "name": "5G",
    "grade": 5,
    "section": "Girls",
    "capacity": 18,
    "supervisor": "Amy Collins"
  },
  {
    "id": 11,
    "name": "6B",
    "grade": 6,
    "section": "Boys",
    "capacity": 12,
    "supervisor": "Jerry Foster"
  },
  {
    "id": 12,
    "name": "6G",
    "grade": 6,
    "section": "Girls",
    "capacity": 19,
    "supervisor": "Linda Moore"
  },
  {
    "id": 13,
    "name": "7B",
    "grade": 7,
    "section": "Boys",
    "capacity": 13,
    "supervisor": "Amy Collins"
  },
  {
    "id": 14,
    "name": "7G",
    "grade": 7,
    "section": "Girls",
    "capacity": 14,
    "supervisor": "Sandra Lee"
  },
  {
    "id": 15,
    "name": "8B",
    "grade": 8,
    "section": "Boys",
    "capacity": 11,
    "supervisor": "Raymond Jackson 2"
  },
  {
    "id": 16,
    "name": "8G",
    "grade": 8,
    "section": "Girls",
    "capacity": 11,
    "supervisor": "Margaret Jackson"
  },
  {
    "id": 17,
    "name": "9B",
    "grade": 9,
    "section": "Boys",
    "capacity": 12,
    "supervisor": "Jerry Flores"
  },
  {
    "id": 18,
    "name": "9G",
    "grade": 9,
    "section": "Girls",
    "capacity": 12,
    "supervisor": "Carolyn Rogers 2"
  },
  {
    "id": 19,
    "name": "10B",
    "grade": 10,
    "section": "Boys",
    "capacity": 17,
    "supervisor": "Mary Powell"
  },
  {
    "id": 20,
    "name": "10G",
    "grade": 10,
    "section": "Girls",
    "capacity": 18,
    "supervisor": "Cynthia Barnes"
  }
];

export const parentsData = [
  {
    "id": 1,
    "name": "Nancy Collins",
    "email": "nancy.collins@gmail.com",
    "phone": "+92-300-972-1094",
    "address": "166 Sycamore Close, Seattle",
    "students": [
      "Angela Collins",
      "Aaron Collins",
      "Samantha Collins"
    ]
  },
  {
    "id": 2,
    "name": "Benjamin Evans",
    "email": "benjamin.evans@gmail.com",
    "phone": "+92-300-608-1097",
    "address": "17 Pine Road, Denver",
    "students": [
      "Raymond Evans",
      "Alexander Evans"
    ]
  },
  {
    "id": 3,
    "name": "Debra Hill",
    "email": "debra.hill@gmail.com",
    "phone": "+92-300-507-1101",
    "address": "28 Mill Lane, Glasgow",
    "students": [
      "David Hill",
      "Sandra Hill",
      "Jacob Hill"
    ]
  },
  {
    "id": 4,
    "name": "Deborah Morgan",
    "email": "deborah.morgan@gmail.com",
    "phone": "+92-300-667-1103",
    "address": "193 Main St, Boston",
    "students": [
      "Nancy Morgan"
    ]
  },
  {
    "id": 5,
    "name": "Betty Reed",
    "email": "betty.reed@gmail.com",
    "phone": "+92-300-937-1105",
    "address": "198 Bridge Street, Manchester",
    "students": [
      "Paul Reed"
    ]
  },
  {
    "id": 6,
    "name": "Nancy Gray",
    "email": "nancy.gray@gmail.com",
    "phone": "+92-300-828-1107",
    "address": "23 Pine Road, Glasgow",
    "students": [
      "David Gray"
    ]
  },
  {
    "id": 7,
    "name": "Linda Henderson",
    "email": "linda.henderson@gmail.com",
    "phone": "+92-300-428-1109",
    "address": "141 King Street, Glasgow",
    "students": [
      "Amy Henderson"
    ]
  },
  {
    "id": 8,
    "name": "Nicholas Powell",
    "email": "nicholas.powell@gmail.com",
    "phone": "+92-300-492-1111",
    "address": "2 Elm Street, Leeds",
    "students": [
      "Gregory Powell"
    ]
  },
  {
    "id": 9,
    "name": "Christopher Sullivan",
    "email": "christopher.sullivan@gmail.com",
    "phone": "+92-300-354-1113",
    "address": "143 Queen Street, Leeds",
    "students": [
      "Benjamin Sullivan"
    ]
  },
  {
    "id": 10,
    "name": "David Collins",
    "email": "david.collins@gmail.com",
    "phone": "+92-300-772-1117",
    "address": "139 Cedar Lane, Seattle",
    "students": [
      "George Collins",
      "Margaret Collins",
      "Gary Collins"
    ]
  },
  {
    "id": 11,
    "name": "Shirley Nelson",
    "email": "shirley.nelson@gmail.com",
    "phone": "+92-300-779-1119",
    "address": "37 Victoria Street, Denver",
    "students": [
      "Nancy Nelson"
    ]
  },
  {
    "id": 12,
    "name": "Mary Cox",
    "email": "mary.cox@gmail.com",
    "phone": "+92-300-380-1121",
    "address": "3 Green Lane, Manchester",
    "students": [
      "Benjamin Cox"
    ]
  },
  {
    "id": 13,
    "name": "Alexander Baker",
    "email": "alexander.baker@gmail.com",
    "phone": "+92-300-308-1123",
    "address": "75 Pine Road, Boston",
    "students": [
      "Samantha Baker 2"
    ]
  },
  {
    "id": 14,
    "name": "Dennis Henderson",
    "email": "dennis.henderson@gmail.com",
    "phone": "+92-300-854-1127",
    "address": "47 King Street, Manchester",
    "students": [
      "Matthew Henderson",
      "Rachel Henderson 2",
      "Jessica Henderson"
    ]
  },
  {
    "id": 15,
    "name": "Karen Gray",
    "email": "karen.gray@gmail.com",
    "phone": "+92-300-628-1130",
    "address": "57 Birch Drive, Boston",
    "students": [
      "Donna Gray",
      "Barbara Gray"
    ]
  },
  {
    "id": 16,
    "name": "Laura Hall",
    "email": "laura.hall@gmail.com",
    "phone": "+92-300-823-1132",
    "address": "52 Church Road, London",
    "students": [
      "Benjamin Hall"
    ]
  },
  {
    "id": 17,
    "name": "Dorothy Collins",
    "email": "dorothy.collins@gmail.com",
    "phone": "+92-300-823-1136",
    "address": "40 High Street, Chicago",
    "students": [
      "Mark Collins",
      "Debra Collins",
      "Patricia Collins"
    ]
  },
  {
    "id": 18,
    "name": "Patricia Thompson",
    "email": "patricia.thompson@gmail.com",
    "phone": "+92-300-500-1139",
    "address": "80 Cedar Lane, Denver",
    "students": [
      "Shirley Thompson",
      "Kevin Thompson"
    ]
  },
  {
    "id": 19,
    "name": "Ryan Cox",
    "email": "ryan.cox@gmail.com",
    "phone": "+92-300-540-1143",
    "address": "98 Oak Avenue, Seattle",
    "students": [
      "Jason Cox",
      "Donna Cox",
      "Paul Cox"
    ]
  },
  {
    "id": 20,
    "name": "Kathleen Butler",
    "email": "kathleen.butler@gmail.com",
    "phone": "+92-300-638-1145",
    "address": "30 High Street, Denver",
    "students": [
      "Samuel Butler"
    ]
  },
  {
    "id": 21,
    "name": "Christopher Gray",
    "email": "christopher.gray@gmail.com",
    "phone": "+92-300-712-1147",
    "address": "90 Main St, Birmingham",
    "students": [
      "Emily Gray"
    ]
  },
  {
    "id": 22,
    "name": "Mary King",
    "email": "mary.king@gmail.com",
    "phone": "+92-300-694-1150",
    "address": "52 Oak Avenue, Birmingham",
    "students": [
      "Gregory King",
      "Jason King"
    ]
  },
  {
    "id": 23,
    "name": "Jacob Watson",
    "email": "jacob.watson@gmail.com",
    "phone": "+92-300-353-1153",
    "address": "89 Pine Road, Chicago",
    "students": [
      "Christopher Watson",
      "Catherine Watson"
    ]
  },
  {
    "id": 24,
    "name": "Kimberly Evans",
    "email": "kimberly.evans@gmail.com",
    "phone": "+92-300-864-1155",
    "address": "46 Park Avenue, Seattle",
    "students": [
      "Rachel Evans"
    ]
  },
  {
    "id": 25,
    "name": "Ruth Wilson",
    "email": "ruth.wilson@gmail.com",
    "phone": "+92-300-762-1158",
    "address": "153 Queen Street, Birmingham",
    "students": [
      "Mark Wilson",
      "Mark Wilson 2"
    ]
  },
  {
    "id": 26,
    "name": "Paul Foster",
    "email": "paul.foster@gmail.com",
    "phone": "+92-300-439-1161",
    "address": "148 Victoria Street, Manchester",
    "students": [
      "Anna Foster",
      "Andrew Foster"
    ]
  },
  {
    "id": 27,
    "name": "Carolyn Perry",
    "email": "carolyn.perry@gmail.com",
    "phone": "+92-300-256-1163",
    "address": "78 Oak Avenue, Seattle",
    "students": [
      "Kimberly Perry"
    ]
  },
  {
    "id": 28,
    "name": "Gary Bailey",
    "email": "gary.bailey@gmail.com",
    "phone": "+92-300-143-1165",
    "address": "139 Park Avenue, Denver",
    "students": [
      "David Bailey"
    ]
  },
  {
    "id": 29,
    "name": "Donna Evans",
    "email": "donna.evans@gmail.com",
    "phone": "+92-300-613-1168",
    "address": "51 Birch Drive, Austin",
    "students": [
      "Dennis Evans",
      "Amy Evans"
    ]
  },
  {
    "id": 30,
    "name": "Betty Hall",
    "email": "betty.hall@gmail.com",
    "phone": "+92-300-315-1170",
    "address": "4 Park Avenue, London",
    "students": [
      "Melissa Hall"
    ]
  },
  {
    "id": 31,
    "name": "Carolyn Rogers 3",
    "email": "carolyn.rogers@gmail.com",
    "phone": "+92-300-398-1173",
    "address": "23 Elm Street, Chicago",
    "students": [
      "Laura Rogers",
      "Robert Rogers"
    ]
  },
  {
    "id": 32,
    "name": "Margaret Anderson",
    "email": "margaret.anderson@gmail.com",
    "phone": "+92-300-941-1176",
    "address": "22 Mill Lane, Boston",
    "students": [
      "Patricia Anderson",
      "Jessica Anderson"
    ]
  },
  {
    "id": 33,
    "name": "Catherine Barnes",
    "email": "catherine.barnes@gmail.com",
    "phone": "+92-300-934-1178",
    "address": "87 Park Avenue, London",
    "students": [
      "Kevin Barnes"
    ]
  },
  {
    "id": 34,
    "name": "Benjamin King",
    "email": "benjamin.king@gmail.com",
    "phone": "+92-300-905-1180",
    "address": "195 Bridge Street, Glasgow",
    "students": [
      "Ryan King"
    ]
  },
  {
    "id": 35,
    "name": "Amy King",
    "email": "amy.king@gmail.com",
    "phone": "+92-300-308-1182",
    "address": "63 Oak Avenue, Leeds",
    "students": [
      "Andrew King"
    ]
  },
  {
    "id": 36,
    "name": "Mary Rogers",
    "email": "mary.rogers@gmail.com",
    "phone": "+92-300-609-1184",
    "address": "176 Willow Way, Manchester",
    "students": [
      "Sarah Rogers"
    ]
  },
  {
    "id": 37,
    "name": "Benjamin Lee",
    "email": "benjamin.lee@gmail.com",
    "phone": "+92-300-194-1187",
    "address": "18 Sycamore Close, Manchester",
    "students": [
      "George Lee",
      "Margaret Lee"
    ]
  },
  {
    "id": 38,
    "name": "Jennifer Fisher",
    "email": "jennifer.fisher@gmail.com",
    "phone": "+92-300-154-1190",
    "address": "150 Elm Street, Birmingham",
    "students": [
      "Anthony Fisher 2",
      "Steven Fisher"
    ]
  },
  {
    "id": 39,
    "name": "Carolyn Nelson",
    "email": "carolyn.nelson@gmail.com",
    "phone": "+92-300-169-1193",
    "address": "43 King Street, Austin",
    "students": [
      "Cynthia Nelson",
      "Samantha Nelson"
    ]
  },
  {
    "id": 40,
    "name": "Matthew Moore",
    "email": "matthew.moore@gmail.com",
    "phone": "+92-300-501-1197",
    "address": "193 Maple Street, Boston",
    "students": [
      "Nancy Moore",
      "David Moore",
      "Elizabeth Moore"
    ]
  },
  {
    "id": 41,
    "name": "Michelle Butler",
    "email": "michelle.butler@gmail.com",
    "phone": "+92-300-779-1200",
    "address": "161 Willow Way, Austin",
    "students": [
      "Janet Butler",
      "Patricia Butler"
    ]
  },
  {
    "id": 42,
    "name": "Heather Collins",
    "email": "heather.collins@gmail.com",
    "phone": "+92-300-528-1203",
    "address": "79 Main St, Seattle",
    "students": [
      "Anthony Collins",
      "Daniel Collins"
    ]
  },
  {
    "id": 43,
    "name": "Joseph Sullivan",
    "email": "joseph.sullivan@gmail.com",
    "phone": "+92-300-964-1205",
    "address": "118 Oak Avenue, Denver",
    "students": [
      "Gary Sullivan"
    ]
  },
  {
    "id": 44,
    "name": "Debra Bennett",
    "email": "debra.bennett@gmail.com",
    "phone": "+92-300-517-1207",
    "address": "75 Willow Way, Manchester",
    "students": [
      "Gregory Bennett"
    ]
  },
  {
    "id": 45,
    "name": "Jerry Jackson",
    "email": "jerry.jackson@gmail.com",
    "phone": "+92-300-471-1210",
    "address": "31 Pine Road, London",
    "students": [
      "Christine Jackson",
      "Ryan Jackson 2"
    ]
  },
  {
    "id": 46,
    "name": "Cynthia Fisher",
    "email": "cynthia.fisher@gmail.com",
    "phone": "+92-300-909-1212",
    "address": "157 Queen Street, Seattle",
    "students": [
      "Anthony Fisher 3"
    ]
  },
  {
    "id": 47,
    "name": "Laura Diaz",
    "email": "laura.diaz@gmail.com",
    "phone": "+92-300-854-1216",
    "address": "42 Queen Street, Leeds",
    "students": [
      "Jack Diaz",
      "Ryan Diaz 2",
      "Timothy Diaz 2"
    ]
  },
  {
    "id": 48,
    "name": "Ruth Hall",
    "email": "ruth.hall@gmail.com",
    "phone": "+92-300-177-1218",
    "address": "142 Chestnut Grove, Austin",
    "students": [
      "Amy Hall"
    ]
  },
  {
    "id": 49,
    "name": "Margaret Lee 2",
    "email": "margaret.lee@gmail.com",
    "phone": "+92-300-770-1221",
    "address": "114 Cedar Lane, Seattle",
    "students": [
      "Frank Lee",
      "Christine Lee 2"
    ]
  },
  {
    "id": 50,
    "name": "Christopher Evans",
    "email": "christopher.evans@gmail.com",
    "phone": "+92-300-869-1223",
    "address": "178 Main St, London",
    "students": [
      "Samuel Evans"
    ]
  },
  {
    "id": 51,
    "name": "Gregory Thompson",
    "email": "gregory.thompson@gmail.com",
    "phone": "+92-300-247-1226",
    "address": "187 Sycamore Close, Birmingham",
    "students": [
      "Mary Thompson",
      "Jacob Thompson"
    ]
  },
  {
    "id": 52,
    "name": "Susan Cruz",
    "email": "susan.cruz@gmail.com",
    "phone": "+92-300-742-1228",
    "address": "131 High Street, Austin",
    "students": [
      "Catherine Cruz"
    ]
  },
  {
    "id": 53,
    "name": "William Carter",
    "email": "william.carter@gmail.com",
    "phone": "+92-300-489-1231",
    "address": "198 Green Lane, London",
    "students": [
      "Ruth Carter",
      "Ruth Carter 2"
    ]
  },
  {
    "id": 54,
    "name": "Margaret Evans",
    "email": "margaret.evans@gmail.com",
    "phone": "+92-300-912-1233",
    "address": "177 Cedar Lane, Denver",
    "students": [
      "Andrew Evans"
    ]
  },
  {
    "id": 55,
    "name": "Margaret Griffin",
    "email": "margaret.griffin@gmail.com",
    "phone": "+92-300-701-1236",
    "address": "52 Chestnut Grove, London",
    "students": [
      "Andrew Griffin",
      "Justin Griffin"
    ]
  },
  {
    "id": 56,
    "name": "Heather Reed",
    "email": "heather.reed@gmail.com",
    "phone": "+92-300-302-1238",
    "address": "199 Victoria Street, Chicago",
    "students": [
      "Gregory Reed"
    ]
  },
  {
    "id": 57,
    "name": "Heather Baker",
    "email": "heather.baker@gmail.com",
    "phone": "+92-300-373-1241",
    "address": "104 Park Avenue, Seattle",
    "students": [
      "Anna Baker",
      "Dorothy Baker"
    ]
  },
  {
    "id": 58,
    "name": "Dorothy Wright",
    "email": "dorothy.wright@gmail.com",
    "phone": "+92-300-145-1243",
    "address": "116 Chestnut Grove, Austin",
    "students": [
      "William Wright"
    ]
  },
  {
    "id": 59,
    "name": "Joseph Bailey",
    "email": "joseph.bailey@gmail.com",
    "phone": "+92-300-642-1245",
    "address": "121 Green Lane, Austin",
    "students": [
      "Rachel Bailey"
    ]
  },
  {
    "id": 60,
    "name": "Frank Anderson",
    "email": "frank.anderson@gmail.com",
    "phone": "+92-300-371-1248",
    "address": "67 Bridge Street, London",
    "students": [
      "Mark Anderson",
      "Betty Anderson"
    ]
  },
  {
    "id": 61,
    "name": "William Young",
    "email": "william.young@gmail.com",
    "phone": "+92-300-860-1252",
    "address": "141 Park Avenue, Glasgow",
    "students": [
      "Benjamin Young",
      "Carolyn Young",
      "Barbara Young"
    ]
  },
  {
    "id": 62,
    "name": "Linda Butler",
    "email": "linda.butler@gmail.com",
    "phone": "+92-300-644-1255",
    "address": "101 Willow Way, Austin",
    "students": [
      "Joseph Butler",
      "Michelle Butler 2"
    ]
  },
  {
    "id": 63,
    "name": "Jack Foster",
    "email": "jack.foster@gmail.com",
    "phone": "+92-300-972-1258",
    "address": "172 Birch Drive, Chicago",
    "students": [
      "Karen Foster",
      "Rachel Foster"
    ]
  },
  {
    "id": 64,
    "name": "Amy Jackson",
    "email": "amy.jackson@gmail.com",
    "phone": "+92-300-254-1261",
    "address": "148 King Street, Austin",
    "students": [
      "Karen Jackson",
      "Susan Jackson 2"
    ]
  },
  {
    "id": 65,
    "name": "Christine Jackson 2",
    "email": "christine.jackson@gmail.com",
    "phone": "+92-300-999-1263",
    "address": "129 Park Avenue, Seattle",
    "students": [
      "Mary Jackson"
    ]
  },
  {
    "id": 66,
    "name": "Susan Reed",
    "email": "susan.reed@gmail.com",
    "phone": "+92-300-722-1265",
    "address": "157 Cedar Lane, Manchester",
    "students": [
      "Jessica Reed"
    ]
  },
  {
    "id": 67,
    "name": "Daniel Rogers",
    "email": "daniel.rogers@gmail.com",
    "phone": "+92-300-816-1267",
    "address": "80 Park Avenue, Denver",
    "students": [
      "Betty Rogers"
    ]
  },
  {
    "id": 68,
    "name": "Matthew Anderson",
    "email": "matthew.anderson@gmail.com",
    "phone": "+92-300-556-1270",
    "address": "84 Pine Road, London",
    "students": [
      "Stephanie Anderson",
      "Amy Anderson"
    ]
  },
  {
    "id": 69,
    "name": "Charles Barnes 2",
    "email": "charles.barnes@gmail.com",
    "phone": "+92-300-438-1273",
    "address": "9 High Street, Leeds",
    "students": [
      "Stephanie Barnes",
      "Heather Barnes"
    ]
  },
  {
    "id": 70,
    "name": "Patricia Rogers",
    "email": "patricia.rogers@gmail.com",
    "phone": "+92-300-896-1276",
    "address": "56 Green Lane, Boston",
    "students": [
      "Richard Rogers",
      "Tyler Rogers"
    ]
  },
  {
    "id": 71,
    "name": "Paul Morgan",
    "email": "paul.morgan@gmail.com",
    "phone": "+92-300-698-1278",
    "address": "69 King Street, Denver",
    "students": [
      "Raymond Morgan"
    ]
  },
  {
    "id": 72,
    "name": "Margaret Reed",
    "email": "margaret.reed@gmail.com",
    "phone": "+92-300-923-1280",
    "address": "132 Mill Lane, Austin",
    "students": [
      "Patricia Reed"
    ]
  },
  {
    "id": 73,
    "name": "David Bailey 2",
    "email": "david.bailey@gmail.com",
    "phone": "+92-300-799-1282",
    "address": "85 Cedar Lane, Manchester",
    "students": [
      "Heather Bailey"
    ]
  },
  {
    "id": 74,
    "name": "Rachel Wright",
    "email": "rachel.wright@gmail.com",
    "phone": "+92-300-853-1286",
    "address": "117 Pine Road, Denver",
    "students": [
      "Thomas Wright",
      "Samuel Wright",
      "Andrew Wright"
    ]
  },
  {
    "id": 75,
    "name": "Rebecca Hill 2",
    "email": "rebecca.hill@gmail.com",
    "phone": "+92-300-857-1290",
    "address": "113 Pine Road, Boston",
    "students": [
      "Steven Hill",
      "Dennis Hill",
      "Deborah Hill"
    ]
  },
  {
    "id": 76,
    "name": "Barbara Hill",
    "email": "barbara.hill@gmail.com",
    "phone": "+92-300-678-1293",
    "address": "17 Victoria Street, Boston",
    "students": [
      "Benjamin Hill",
      "Donna Hill"
    ]
  },
  {
    "id": 77,
    "name": "Stephanie Fisher",
    "email": "stephanie.fisher@gmail.com",
    "phone": "+92-300-891-1296",
    "address": "79 Park Avenue, London",
    "students": [
      "Ryan Fisher",
      "Larry Fisher"
    ]
  },
  {
    "id": 78,
    "name": "Dorothy Hall",
    "email": "dorothy.hall@gmail.com",
    "phone": "+92-300-587-1298",
    "address": "40 Victoria Street, Birmingham",
    "students": [
      "Melissa Hall 2"
    ]
  },
  {
    "id": 79,
    "name": "Nancy Griffin",
    "email": "nancy.griffin@gmail.com",
    "phone": "+92-300-827-1302",
    "address": "28 Chestnut Grove, Glasgow",
    "students": [
      "Steven Griffin",
      "Aaron Griffin",
      "Larry Griffin"
    ]
  },
  {
    "id": 80,
    "name": "Samuel Powell",
    "email": "samuel.powell@gmail.com",
    "phone": "+92-300-319-1304",
    "address": "112 Queen Street, Chicago",
    "students": [
      "Robert Powell"
    ]
  },
  {
    "id": 81,
    "name": "Donna Bailey",
    "email": "donna.bailey@gmail.com",
    "phone": "+92-300-172-1307",
    "address": "98 Main St, London",
    "students": [
      "Emily Bailey",
      "Mark Bailey"
    ]
  },
  {
    "id": 82,
    "name": "Christine Lee 3",
    "email": "christine.lee@gmail.com",
    "phone": "+92-300-206-1311",
    "address": "160 Green Lane, Birmingham",
    "students": [
      "Melissa Lee",
      "Karen Lee",
      "Elizabeth Lee"
    ]
  },
  {
    "id": 83,
    "name": "Debra Griffin",
    "email": "debra.griffin@gmail.com",
    "phone": "+92-300-879-1313",
    "address": "52 Bridge Street, Birmingham",
    "students": [
      "Betty Griffin"
    ]
  },
  {
    "id": 84,
    "name": "Heather Henderson",
    "email": "heather.henderson@gmail.com",
    "phone": "+92-300-720-1315",
    "address": "121 Elm Street, Austin",
    "students": [
      "Elizabeth Henderson"
    ]
  },
  {
    "id": 85,
    "name": "Patricia Gray",
    "email": "patricia.gray@gmail.com",
    "phone": "+92-300-105-1317",
    "address": "154 Queen Street, Manchester",
    "students": [
      "Elizabeth Gray"
    ]
  },
  {
    "id": 86,
    "name": "Mary Rogers 2",
    "email": "mary.rogers2@gmail.com",
    "phone": "+92-300-577-1319",
    "address": "163 High Street, Boston",
    "students": [
      "Kimberly Rogers"
    ]
  },
  {
    "id": 87,
    "name": "Laura Jackson",
    "email": "laura.jackson@gmail.com",
    "phone": "+92-300-142-1321",
    "address": "57 High Street, Leeds",
    "students": [
      "William Jackson"
    ]
  }
];

export const studentsData = [
  {
    "id": 1,
    "name": "Angela Collins",
    "email": "angela.collins@students.school.com",
    "phone": "+92-300-344-1091",
    "grade": 4,
    "class": "4G",
    "address": "166 Sycamore Close, Seattle"
  },
  {
    "id": 2,
    "name": "Aaron Collins",
    "email": "aaron.collins@students.school.com",
    "phone": "+92-300-970-1092",
    "grade": 5,
    "class": "5B",
    "address": "166 Sycamore Close, Seattle"
  },
  {
    "id": 3,
    "name": "Samantha Collins",
    "email": "samantha.collins@students.school.com",
    "phone": "+92-300-232-1093",
    "grade": 5,
    "class": "5G",
    "address": "166 Sycamore Close, Seattle"
  },
  {
    "id": 4,
    "name": "Raymond Evans",
    "email": "raymond.evans@students.school.com",
    "phone": "+92-300-181-1095",
    "grade": 9,
    "class": "9B",
    "address": "17 Pine Road, Denver"
  },
  {
    "id": 5,
    "name": "Alexander Evans",
    "email": "alexander.evans@students.school.com",
    "phone": "+92-300-488-1096",
    "grade": 3,
    "class": "3B",
    "address": "17 Pine Road, Denver"
  },
  {
    "id": 6,
    "name": "David Hill",
    "email": "david.hill@students.school.com",
    "phone": "+92-300-573-1098",
    "grade": 8,
    "class": "8B",
    "address": "28 Mill Lane, Glasgow"
  },
  {
    "id": 7,
    "name": "Sandra Hill",
    "email": "sandra.hill@students.school.com",
    "phone": "+92-300-524-1099",
    "grade": 2,
    "class": "2G",
    "address": "28 Mill Lane, Glasgow"
  },
  {
    "id": 8,
    "name": "Jacob Hill",
    "email": "jacob.hill@students.school.com",
    "phone": "+92-300-280-1100",
    "grade": 5,
    "class": "5B",
    "address": "28 Mill Lane, Glasgow"
  },
  {
    "id": 9,
    "name": "Nancy Morgan",
    "email": "nancy.morgan@students.school.com",
    "phone": "+92-300-511-1102",
    "grade": 8,
    "class": "8G",
    "address": "193 Main St, Boston"
  },
  {
    "id": 10,
    "name": "Paul Reed",
    "email": "paul.reed@students.school.com",
    "phone": "+92-300-326-1104",
    "grade": 1,
    "class": "1B",
    "address": "198 Bridge Street, Manchester"
  },
  {
    "id": 11,
    "name": "David Gray",
    "email": "david.gray@students.school.com",
    "phone": "+92-300-156-1106",
    "grade": 1,
    "class": "1B",
    "address": "23 Pine Road, Glasgow"
  },
  {
    "id": 12,
    "name": "Amy Henderson",
    "email": "amy.henderson@students.school.com",
    "phone": "+92-300-516-1108",
    "grade": 8,
    "class": "8G",
    "address": "141 King Street, Glasgow"
  },
  {
    "id": 13,
    "name": "Gregory Powell",
    "email": "gregory.powell@students.school.com",
    "phone": "+92-300-632-1110",
    "grade": 1,
    "class": "1B",
    "address": "2 Elm Street, Leeds"
  },
  {
    "id": 14,
    "name": "Benjamin Sullivan",
    "email": "benjamin.sullivan@students.school.com",
    "phone": "+92-300-797-1112",
    "grade": 7,
    "class": "7B",
    "address": "143 Queen Street, Leeds"
  },
  {
    "id": 15,
    "name": "George Collins",
    "email": "george.collins@students.school.com",
    "phone": "+92-300-234-1114",
    "grade": 9,
    "class": "9B",
    "address": "139 Cedar Lane, Seattle"
  },
  {
    "id": 16,
    "name": "Margaret Collins",
    "email": "margaret.collins@students.school.com",
    "phone": "+92-300-312-1115",
    "grade": 4,
    "class": "4G",
    "address": "139 Cedar Lane, Seattle"
  },
  {
    "id": 17,
    "name": "Gary Collins",
    "email": "gary.collins@students.school.com",
    "phone": "+92-300-767-1116",
    "grade": 1,
    "class": "1B",
    "address": "139 Cedar Lane, Seattle"
  },
  {
    "id": 18,
    "name": "Nancy Nelson",
    "email": "nancy.nelson@students.school.com",
    "phone": "+92-300-567-1118",
    "grade": 1,
    "class": "1G",
    "address": "37 Victoria Street, Denver"
  },
  {
    "id": 19,
    "name": "Benjamin Cox",
    "email": "benjamin.cox@students.school.com",
    "phone": "+92-300-678-1120",
    "grade": 2,
    "class": "2B",
    "address": "3 Green Lane, Manchester"
  },
  {
    "id": 20,
    "name": "Samantha Baker 2",
    "email": "samantha.baker@students.school.com",
    "phone": "+92-300-725-1122",
    "grade": 4,
    "class": "4G",
    "address": "75 Pine Road, Boston"
  },
  {
    "id": 21,
    "name": "Matthew Henderson",
    "email": "matthew.henderson@students.school.com",
    "phone": "+92-300-240-1124",
    "grade": 3,
    "class": "3B",
    "address": "47 King Street, Manchester"
  },
  {
    "id": 22,
    "name": "Rachel Henderson 2",
    "email": "rachel.henderson@students.school.com",
    "phone": "+92-300-933-1125",
    "grade": 1,
    "class": "1G",
    "address": "47 King Street, Manchester"
  },
  {
    "id": 23,
    "name": "Jessica Henderson",
    "email": "jessica.henderson@students.school.com",
    "phone": "+92-300-609-1126",
    "grade": 10,
    "class": "10G",
    "address": "47 King Street, Manchester"
  },
  {
    "id": 24,
    "name": "Donna Gray",
    "email": "donna.gray@students.school.com",
    "phone": "+92-300-958-1128",
    "grade": 7,
    "class": "7G",
    "address": "57 Birch Drive, Boston"
  },
  {
    "id": 25,
    "name": "Barbara Gray",
    "email": "barbara.gray@students.school.com",
    "phone": "+92-300-249-1129",
    "grade": 10,
    "class": "10G",
    "address": "57 Birch Drive, Boston"
  },
  {
    "id": 26,
    "name": "Benjamin Hall",
    "email": "benjamin.hall@students.school.com",
    "phone": "+92-300-329-1131",
    "grade": 4,
    "class": "4B",
    "address": "52 Church Road, London"
  },
  {
    "id": 27,
    "name": "Mark Collins",
    "email": "mark.collins@students.school.com",
    "phone": "+92-300-263-1133",
    "grade": 7,
    "class": "7B",
    "address": "40 High Street, Chicago"
  },
  {
    "id": 28,
    "name": "Debra Collins",
    "email": "debra.collins@students.school.com",
    "phone": "+92-300-400-1134",
    "grade": 5,
    "class": "5G",
    "address": "40 High Street, Chicago"
  },
  {
    "id": 29,
    "name": "Patricia Collins",
    "email": "patricia.collins@students.school.com",
    "phone": "+92-300-995-1135",
    "grade": 3,
    "class": "3G",
    "address": "40 High Street, Chicago"
  },
  {
    "id": 30,
    "name": "Shirley Thompson",
    "email": "shirley.thompson@students.school.com",
    "phone": "+92-300-961-1137",
    "grade": 4,
    "class": "4G",
    "address": "80 Cedar Lane, Denver"
  },
  {
    "id": 31,
    "name": "Kevin Thompson",
    "email": "kevin.thompson@students.school.com",
    "phone": "+92-300-255-1138",
    "grade": 6,
    "class": "6B",
    "address": "80 Cedar Lane, Denver"
  },
  {
    "id": 32,
    "name": "Jason Cox",
    "email": "jason.cox@students.school.com",
    "phone": "+92-300-770-1140",
    "grade": 4,
    "class": "4B",
    "address": "98 Oak Avenue, Seattle"
  },
  {
    "id": 33,
    "name": "Donna Cox",
    "email": "donna.cox@students.school.com",
    "phone": "+92-300-810-1141",
    "grade": 10,
    "class": "10G",
    "address": "98 Oak Avenue, Seattle"
  },
  {
    "id": 34,
    "name": "Paul Cox",
    "email": "paul.cox@students.school.com",
    "phone": "+92-300-302-1142",
    "grade": 1,
    "class": "1B",
    "address": "98 Oak Avenue, Seattle"
  },
  {
    "id": 35,
    "name": "Samuel Butler",
    "email": "samuel.butler@students.school.com",
    "phone": "+92-300-773-1144",
    "grade": 2,
    "class": "2B",
    "address": "30 High Street, Denver"
  },
  {
    "id": 36,
    "name": "Emily Gray",
    "email": "emily.gray@students.school.com",
    "phone": "+92-300-305-1146",
    "grade": 2,
    "class": "2G",
    "address": "90 Main St, Birmingham"
  },
  {
    "id": 37,
    "name": "Gregory King",
    "email": "gregory.king@students.school.com",
    "phone": "+92-300-886-1148",
    "grade": 10,
    "class": "10B",
    "address": "52 Oak Avenue, Birmingham"
  },
  {
    "id": 38,
    "name": "Jason King",
    "email": "jason.king@students.school.com",
    "phone": "+92-300-692-1149",
    "grade": 6,
    "class": "6B",
    "address": "52 Oak Avenue, Birmingham"
  },
  {
    "id": 39,
    "name": "Christopher Watson",
    "email": "christopher.watson@students.school.com",
    "phone": "+92-300-151-1151",
    "grade": 5,
    "class": "5B",
    "address": "89 Pine Road, Chicago"
  },
  {
    "id": 40,
    "name": "Catherine Watson",
    "email": "catherine.watson@students.school.com",
    "phone": "+92-300-441-1152",
    "grade": 3,
    "class": "3G",
    "address": "89 Pine Road, Chicago"
  },
  {
    "id": 41,
    "name": "Rachel Evans",
    "email": "rachel.evans@students.school.com",
    "phone": "+92-300-841-1154",
    "grade": 5,
    "class": "5G",
    "address": "46 Park Avenue, Seattle"
  },
  {
    "id": 42,
    "name": "Mark Wilson",
    "email": "mark.wilson@students.school.com",
    "phone": "+92-300-134-1156",
    "grade": 4,
    "class": "4B",
    "address": "153 Queen Street, Birmingham"
  },
  {
    "id": 43,
    "name": "Mark Wilson 2",
    "email": "mark.wilson2@students.school.com",
    "phone": "+92-300-625-1157",
    "grade": 3,
    "class": "3B",
    "address": "153 Queen Street, Birmingham"
  },
  {
    "id": 44,
    "name": "Anna Foster",
    "email": "anna.foster@students.school.com",
    "phone": "+92-300-845-1159",
    "grade": 2,
    "class": "2G",
    "address": "148 Victoria Street, Manchester"
  },
  {
    "id": 45,
    "name": "Andrew Foster",
    "email": "andrew.foster@students.school.com",
    "phone": "+92-300-468-1160",
    "grade": 7,
    "class": "7B",
    "address": "148 Victoria Street, Manchester"
  },
  {
    "id": 46,
    "name": "Kimberly Perry",
    "email": "kimberly.perry@students.school.com",
    "phone": "+92-300-209-1162",
    "grade": 3,
    "class": "3G",
    "address": "78 Oak Avenue, Seattle"
  },
  {
    "id": 47,
    "name": "David Bailey",
    "email": "david.bailey@students.school.com",
    "phone": "+92-300-351-1164",
    "grade": 10,
    "class": "10B",
    "address": "139 Park Avenue, Denver"
  },
  {
    "id": 48,
    "name": "Dennis Evans",
    "email": "dennis.evans@students.school.com",
    "phone": "+92-300-308-1166",
    "grade": 8,
    "class": "8B",
    "address": "51 Birch Drive, Austin"
  },
  {
    "id": 49,
    "name": "Amy Evans",
    "email": "amy.evans@students.school.com",
    "phone": "+92-300-345-1167",
    "grade": 7,
    "class": "7G",
    "address": "51 Birch Drive, Austin"
  },
  {
    "id": 50,
    "name": "Melissa Hall",
    "email": "melissa.hall@students.school.com",
    "phone": "+92-300-910-1169",
    "grade": 5,
    "class": "5G",
    "address": "4 Park Avenue, London"
  },
  {
    "id": 51,
    "name": "Laura Rogers",
    "email": "laura.rogers@students.school.com",
    "phone": "+92-300-131-1171",
    "grade": 1,
    "class": "1G",
    "address": "23 Elm Street, Chicago"
  },
  {
    "id": 52,
    "name": "Robert Rogers",
    "email": "robert.rogers@students.school.com",
    "phone": "+92-300-502-1172",
    "grade": 7,
    "class": "7B",
    "address": "23 Elm Street, Chicago"
  },
  {
    "id": 53,
    "name": "Patricia Anderson",
    "email": "patricia.anderson@students.school.com",
    "phone": "+92-300-349-1174",
    "grade": 6,
    "class": "6G",
    "address": "22 Mill Lane, Boston"
  },
  {
    "id": 54,
    "name": "Jessica Anderson",
    "email": "jessica.anderson@students.school.com",
    "phone": "+92-300-893-1175",
    "grade": 3,
    "class": "3G",
    "address": "22 Mill Lane, Boston"
  },
  {
    "id": 55,
    "name": "Kevin Barnes",
    "email": "kevin.barnes@students.school.com",
    "phone": "+92-300-733-1177",
    "grade": 5,
    "class": "5B",
    "address": "87 Park Avenue, London"
  },
  {
    "id": 56,
    "name": "Ryan King",
    "email": "ryan.king@students.school.com",
    "phone": "+92-300-111-1179",
    "grade": 1,
    "class": "1B",
    "address": "195 Bridge Street, Glasgow"
  },
  {
    "id": 57,
    "name": "Andrew King",
    "email": "andrew.king@students.school.com",
    "phone": "+92-300-254-1181",
    "grade": 8,
    "class": "8B",
    "address": "63 Oak Avenue, Leeds"
  },
  {
    "id": 58,
    "name": "Sarah Rogers",
    "email": "sarah.rogers@students.school.com",
    "phone": "+92-300-910-1183",
    "grade": 7,
    "class": "7G",
    "address": "176 Willow Way, Manchester"
  },
  {
    "id": 59,
    "name": "George Lee",
    "email": "george.lee@students.school.com",
    "phone": "+92-300-987-1185",
    "grade": 9,
    "class": "9B",
    "address": "18 Sycamore Close, Manchester"
  },
  {
    "id": 60,
    "name": "Margaret Lee",
    "email": "margaret.lee@students.school.com",
    "phone": "+92-300-966-1186",
    "grade": 2,
    "class": "2G",
    "address": "18 Sycamore Close, Manchester"
  },
  {
    "id": 61,
    "name": "Anthony Fisher 2",
    "email": "anthony.fisher@students.school.com",
    "phone": "+92-300-238-1188",
    "grade": 2,
    "class": "2B",
    "address": "150 Elm Street, Birmingham"
  },
  {
    "id": 62,
    "name": "Steven Fisher",
    "email": "steven.fisher@students.school.com",
    "phone": "+92-300-948-1189",
    "grade": 6,
    "class": "6B",
    "address": "150 Elm Street, Birmingham"
  },
  {
    "id": 63,
    "name": "Cynthia Nelson",
    "email": "cynthia.nelson@students.school.com",
    "phone": "+92-300-406-1191",
    "grade": 3,
    "class": "3G",
    "address": "43 King Street, Austin"
  },
  {
    "id": 64,
    "name": "Samantha Nelson",
    "email": "samantha.nelson@students.school.com",
    "phone": "+92-300-644-1192",
    "grade": 4,
    "class": "4G",
    "address": "43 King Street, Austin"
  },
  {
    "id": 65,
    "name": "Nancy Moore",
    "email": "nancy.moore@students.school.com",
    "phone": "+92-300-701-1194",
    "grade": 3,
    "class": "3G",
    "address": "193 Maple Street, Boston"
  },
  {
    "id": 66,
    "name": "David Moore",
    "email": "david.moore@students.school.com",
    "phone": "+92-300-675-1195",
    "grade": 10,
    "class": "10B",
    "address": "193 Maple Street, Boston"
  },
  {
    "id": 67,
    "name": "Elizabeth Moore",
    "email": "elizabeth.moore@students.school.com",
    "phone": "+92-300-998-1196",
    "grade": 5,
    "class": "5G",
    "address": "193 Maple Street, Boston"
  },
  {
    "id": 68,
    "name": "Janet Butler",
    "email": "janet.butler@students.school.com",
    "phone": "+92-300-189-1198",
    "grade": 1,
    "class": "1G",
    "address": "161 Willow Way, Austin"
  },
  {
    "id": 69,
    "name": "Patricia Butler",
    "email": "patricia.butler@students.school.com",
    "phone": "+92-300-768-1199",
    "grade": 9,
    "class": "9G",
    "address": "161 Willow Way, Austin"
  },
  {
    "id": 70,
    "name": "Anthony Collins",
    "email": "anthony.collins@students.school.com",
    "phone": "+92-300-718-1201",
    "grade": 3,
    "class": "3B",
    "address": "79 Main St, Seattle"
  },
  {
    "id": 71,
    "name": "Daniel Collins",
    "email": "daniel.collins@students.school.com",
    "phone": "+92-300-213-1202",
    "grade": 8,
    "class": "8B",
    "address": "79 Main St, Seattle"
  },
  {
    "id": 72,
    "name": "Gary Sullivan",
    "email": "gary.sullivan@students.school.com",
    "phone": "+92-300-318-1204",
    "grade": 4,
    "class": "4B",
    "address": "118 Oak Avenue, Denver"
  },
  {
    "id": 73,
    "name": "Gregory Bennett",
    "email": "gregory.bennett@students.school.com",
    "phone": "+92-300-291-1206",
    "grade": 2,
    "class": "2B",
    "address": "75 Willow Way, Manchester"
  },
  {
    "id": 74,
    "name": "Christine Jackson",
    "email": "christine.jackson@students.school.com",
    "phone": "+92-300-942-1208",
    "grade": 4,
    "class": "4G",
    "address": "31 Pine Road, London"
  },
  {
    "id": 75,
    "name": "Ryan Jackson 2",
    "email": "ryan.jackson@students.school.com",
    "phone": "+92-300-499-1209",
    "grade": 10,
    "class": "10B",
    "address": "31 Pine Road, London"
  },
  {
    "id": 76,
    "name": "Anthony Fisher 3",
    "email": "anthony.fisher2@students.school.com",
    "phone": "+92-300-426-1211",
    "grade": 10,
    "class": "10B",
    "address": "157 Queen Street, Seattle"
  },
  {
    "id": 77,
    "name": "Jack Diaz",
    "email": "jack.diaz@students.school.com",
    "phone": "+92-300-100-1213",
    "grade": 8,
    "class": "8B",
    "address": "42 Queen Street, Leeds"
  },
  {
    "id": 78,
    "name": "Ryan Diaz 2",
    "email": "ryan.diaz@students.school.com",
    "phone": "+92-300-206-1214",
    "grade": 1,
    "class": "1B",
    "address": "42 Queen Street, Leeds"
  },
  {
    "id": 79,
    "name": "Timothy Diaz 2",
    "email": "timothy.diaz@students.school.com",
    "phone": "+92-300-565-1215",
    "grade": 6,
    "class": "6B",
    "address": "42 Queen Street, Leeds"
  },
  {
    "id": 80,
    "name": "Amy Hall",
    "email": "amy.hall@students.school.com",
    "phone": "+92-300-871-1217",
    "grade": 4,
    "class": "4G",
    "address": "142 Chestnut Grove, Austin"
  },
  {
    "id": 81,
    "name": "Frank Lee",
    "email": "frank.lee@students.school.com",
    "phone": "+92-300-412-1219",
    "grade": 2,
    "class": "2B",
    "address": "114 Cedar Lane, Seattle"
  },
  {
    "id": 82,
    "name": "Christine Lee 2",
    "email": "christine.lee@students.school.com",
    "phone": "+92-300-634-1220",
    "grade": 10,
    "class": "10G",
    "address": "114 Cedar Lane, Seattle"
  },
  {
    "id": 83,
    "name": "Samuel Evans",
    "email": "samuel.evans@students.school.com",
    "phone": "+92-300-670-1222",
    "grade": 3,
    "class": "3B",
    "address": "178 Main St, London"
  },
  {
    "id": 84,
    "name": "Mary Thompson",
    "email": "mary.thompson@students.school.com",
    "phone": "+92-300-433-1224",
    "grade": 6,
    "class": "6G",
    "address": "187 Sycamore Close, Birmingham"
  },
  {
    "id": 85,
    "name": "Jacob Thompson",
    "email": "jacob.thompson@students.school.com",
    "phone": "+92-300-240-1225",
    "grade": 2,
    "class": "2B",
    "address": "187 Sycamore Close, Birmingham"
  },
  {
    "id": 86,
    "name": "Catherine Cruz",
    "email": "catherine.cruz@students.school.com",
    "phone": "+92-300-865-1227",
    "grade": 9,
    "class": "9G",
    "address": "131 High Street, Austin"
  },
  {
    "id": 87,
    "name": "Ruth Carter",
    "email": "ruth.carter@students.school.com",
    "phone": "+92-300-661-1229",
    "grade": 2,
    "class": "2G",
    "address": "198 Green Lane, London"
  },
  {
    "id": 88,
    "name": "Ruth Carter 2",
    "email": "ruth.carter2@students.school.com",
    "phone": "+92-300-764-1230",
    "grade": 6,
    "class": "6G",
    "address": "198 Green Lane, London"
  },
  {
    "id": 89,
    "name": "Andrew Evans",
    "email": "andrew.evans@students.school.com",
    "phone": "+92-300-953-1232",
    "grade": 4,
    "class": "4B",
    "address": "177 Cedar Lane, Denver"
  },
  {
    "id": 90,
    "name": "Andrew Griffin",
    "email": "andrew.griffin@students.school.com",
    "phone": "+92-300-415-1234",
    "grade": 10,
    "class": "10B",
    "address": "52 Chestnut Grove, London"
  },
  {
    "id": 91,
    "name": "Justin Griffin",
    "email": "justin.griffin@students.school.com",
    "phone": "+92-300-274-1235",
    "grade": 9,
    "class": "9B",
    "address": "52 Chestnut Grove, London"
  },
  {
    "id": 92,
    "name": "Gregory Reed",
    "email": "gregory.reed@students.school.com",
    "phone": "+92-300-416-1237",
    "grade": 2,
    "class": "2B",
    "address": "199 Victoria Street, Chicago"
  },
  {
    "id": 93,
    "name": "Anna Baker",
    "email": "anna.baker@students.school.com",
    "phone": "+92-300-503-1239",
    "grade": 7,
    "class": "7G",
    "address": "104 Park Avenue, Seattle"
  },
  {
    "id": 94,
    "name": "Dorothy Baker",
    "email": "dorothy.baker@students.school.com",
    "phone": "+92-300-494-1240",
    "grade": 5,
    "class": "5G",
    "address": "104 Park Avenue, Seattle"
  },
  {
    "id": 95,
    "name": "William Wright",
    "email": "william.wright@students.school.com",
    "phone": "+92-300-263-1242",
    "grade": 5,
    "class": "5B",
    "address": "116 Chestnut Grove, Austin"
  },
  {
    "id": 96,
    "name": "Rachel Bailey",
    "email": "rachel.bailey@students.school.com",
    "phone": "+92-300-381-1244",
    "grade": 5,
    "class": "5G",
    "address": "121 Green Lane, Austin"
  },
  {
    "id": 97,
    "name": "Mark Anderson",
    "email": "mark.anderson@students.school.com",
    "phone": "+92-300-644-1246",
    "grade": 5,
    "class": "5B",
    "address": "67 Bridge Street, London"
  },
  {
    "id": 98,
    "name": "Betty Anderson",
    "email": "betty.anderson@students.school.com",
    "phone": "+92-300-412-1247",
    "grade": 3,
    "class": "3G",
    "address": "67 Bridge Street, London"
  },
  {
    "id": 99,
    "name": "Benjamin Young",
    "email": "benjamin.young@students.school.com",
    "phone": "+92-300-954-1249",
    "grade": 7,
    "class": "7B",
    "address": "141 Park Avenue, Glasgow"
  },
  {
    "id": 100,
    "name": "Carolyn Young",
    "email": "carolyn.young@students.school.com",
    "phone": "+92-300-414-1250",
    "grade": 9,
    "class": "9G",
    "address": "141 Park Avenue, Glasgow"
  },
  {
    "id": 101,
    "name": "Barbara Young",
    "email": "barbara.young@students.school.com",
    "phone": "+92-300-760-1251",
    "grade": 9,
    "class": "9G",
    "address": "141 Park Avenue, Glasgow"
  },
  {
    "id": 102,
    "name": "Joseph Butler",
    "email": "joseph.butler@students.school.com",
    "phone": "+92-300-611-1253",
    "grade": 3,
    "class": "3B",
    "address": "101 Willow Way, Austin"
  },
  {
    "id": 103,
    "name": "Michelle Butler 2",
    "email": "michelle.butler@students.school.com",
    "phone": "+92-300-458-1254",
    "grade": 9,
    "class": "9G",
    "address": "101 Willow Way, Austin"
  },
  {
    "id": 104,
    "name": "Karen Foster",
    "email": "karen.foster@students.school.com",
    "phone": "+92-300-446-1256",
    "grade": 8,
    "class": "8G",
    "address": "172 Birch Drive, Chicago"
  },
  {
    "id": 105,
    "name": "Rachel Foster",
    "email": "rachel.foster@students.school.com",
    "phone": "+92-300-523-1257",
    "grade": 2,
    "class": "2G",
    "address": "172 Birch Drive, Chicago"
  },
  {
    "id": 106,
    "name": "Karen Jackson",
    "email": "karen.jackson@students.school.com",
    "phone": "+92-300-687-1259",
    "grade": 6,
    "class": "6G",
    "address": "148 King Street, Austin"
  },
  {
    "id": 107,
    "name": "Susan Jackson 2",
    "email": "susan.jackson@students.school.com",
    "phone": "+92-300-904-1260",
    "grade": 5,
    "class": "5G",
    "address": "148 King Street, Austin"
  },
  {
    "id": 108,
    "name": "Mary Jackson",
    "email": "mary.jackson@students.school.com",
    "phone": "+92-300-860-1262",
    "grade": 7,
    "class": "7G",
    "address": "129 Park Avenue, Seattle"
  },
  {
    "id": 109,
    "name": "Jessica Reed",
    "email": "jessica.reed@students.school.com",
    "phone": "+92-300-719-1264",
    "grade": 9,
    "class": "9G",
    "address": "157 Cedar Lane, Manchester"
  },
  {
    "id": 110,
    "name": "Betty Rogers",
    "email": "betty.rogers@students.school.com",
    "phone": "+92-300-921-1266",
    "grade": 1,
    "class": "1G",
    "address": "80 Park Avenue, Denver"
  },
  {
    "id": 111,
    "name": "Stephanie Anderson",
    "email": "stephanie.anderson@students.school.com",
    "phone": "+92-300-744-1268",
    "grade": 3,
    "class": "3G",
    "address": "84 Pine Road, London"
  },
  {
    "id": 112,
    "name": "Amy Anderson",
    "email": "amy.anderson@students.school.com",
    "phone": "+92-300-557-1269",
    "grade": 9,
    "class": "9G",
    "address": "84 Pine Road, London"
  },
  {
    "id": 113,
    "name": "Stephanie Barnes",
    "email": "stephanie.barnes@students.school.com",
    "phone": "+92-300-213-1271",
    "grade": 6,
    "class": "6G",
    "address": "9 High Street, Leeds"
  },
  {
    "id": 114,
    "name": "Heather Barnes",
    "email": "heather.barnes@students.school.com",
    "phone": "+92-300-329-1272",
    "grade": 6,
    "class": "6G",
    "address": "9 High Street, Leeds"
  },
  {
    "id": 115,
    "name": "Richard Rogers",
    "email": "richard.rogers@students.school.com",
    "phone": "+92-300-959-1274",
    "grade": 6,
    "class": "6B",
    "address": "56 Green Lane, Boston"
  },
  {
    "id": 116,
    "name": "Tyler Rogers",
    "email": "tyler.rogers@students.school.com",
    "phone": "+92-300-649-1275",
    "grade": 3,
    "class": "3B",
    "address": "56 Green Lane, Boston"
  },
  {
    "id": 117,
    "name": "Raymond Morgan",
    "email": "raymond.morgan@students.school.com",
    "phone": "+92-300-745-1277",
    "grade": 5,
    "class": "5B",
    "address": "69 King Street, Denver"
  },
  {
    "id": 118,
    "name": "Patricia Reed",
    "email": "patricia.reed@students.school.com",
    "phone": "+92-300-782-1279",
    "grade": 10,
    "class": "10G",
    "address": "132 Mill Lane, Austin"
  },
  {
    "id": 119,
    "name": "Heather Bailey",
    "email": "heather.bailey@students.school.com",
    "phone": "+92-300-689-1281",
    "grade": 10,
    "class": "10G",
    "address": "85 Cedar Lane, Manchester"
  },
  {
    "id": 120,
    "name": "Thomas Wright",
    "email": "thomas.wright@students.school.com",
    "phone": "+92-300-294-1283",
    "grade": 7,
    "class": "7B",
    "address": "117 Pine Road, Denver"
  },
  {
    "id": 121,
    "name": "Samuel Wright",
    "email": "samuel.wright@students.school.com",
    "phone": "+92-300-512-1284",
    "grade": 4,
    "class": "4B",
    "address": "117 Pine Road, Denver"
  },
  {
    "id": 122,
    "name": "Andrew Wright",
    "email": "andrew.wright@students.school.com",
    "phone": "+92-300-389-1285",
    "grade": 4,
    "class": "4B",
    "address": "117 Pine Road, Denver"
  },
  {
    "id": 123,
    "name": "Steven Hill",
    "email": "steven.hill@students.school.com",
    "phone": "+92-300-306-1287",
    "grade": 8,
    "class": "8B",
    "address": "113 Pine Road, Boston"
  },
  {
    "id": 124,
    "name": "Dennis Hill",
    "email": "dennis.hill@students.school.com",
    "phone": "+92-300-873-1288",
    "grade": 7,
    "class": "7B",
    "address": "113 Pine Road, Boston"
  },
  {
    "id": 125,
    "name": "Deborah Hill",
    "email": "deborah.hill@students.school.com",
    "phone": "+92-300-865-1289",
    "grade": 7,
    "class": "7G",
    "address": "113 Pine Road, Boston"
  },
  {
    "id": 126,
    "name": "Benjamin Hill",
    "email": "benjamin.hill@students.school.com",
    "phone": "+92-300-113-1291",
    "grade": 10,
    "class": "10B",
    "address": "17 Victoria Street, Boston"
  },
  {
    "id": 127,
    "name": "Donna Hill",
    "email": "donna.hill@students.school.com",
    "phone": "+92-300-370-1292",
    "grade": 7,
    "class": "7G",
    "address": "17 Victoria Street, Boston"
  },
  {
    "id": 128,
    "name": "Ryan Fisher",
    "email": "ryan.fisher@students.school.com",
    "phone": "+92-300-807-1294",
    "grade": 5,
    "class": "5B",
    "address": "79 Park Avenue, London"
  },
  {
    "id": 129,
    "name": "Larry Fisher",
    "email": "larry.fisher@students.school.com",
    "phone": "+92-300-531-1295",
    "grade": 7,
    "class": "7B",
    "address": "79 Park Avenue, London"
  },
  {
    "id": 130,
    "name": "Melissa Hall 2",
    "email": "melissa.hall2@students.school.com",
    "phone": "+92-300-184-1297",
    "grade": 6,
    "class": "6G",
    "address": "40 Victoria Street, Birmingham"
  },
  {
    "id": 131,
    "name": "Steven Griffin",
    "email": "steven.griffin@students.school.com",
    "phone": "+92-300-620-1299",
    "grade": 10,
    "class": "10B",
    "address": "28 Chestnut Grove, Glasgow"
  },
  {
    "id": 132,
    "name": "Aaron Griffin",
    "email": "aaron.griffin@students.school.com",
    "phone": "+92-300-314-1300",
    "grade": 9,
    "class": "9B",
    "address": "28 Chestnut Grove, Glasgow"
  },
  {
    "id": 133,
    "name": "Larry Griffin",
    "email": "larry.griffin@students.school.com",
    "phone": "+92-300-357-1301",
    "grade": 9,
    "class": "9B",
    "address": "28 Chestnut Grove, Glasgow"
  },
  {
    "id": 134,
    "name": "Robert Powell",
    "email": "robert.powell@students.school.com",
    "phone": "+92-300-237-1303",
    "grade": 1,
    "class": "1B",
    "address": "112 Queen Street, Chicago"
  },
  {
    "id": 135,
    "name": "Emily Bailey",
    "email": "emily.bailey@students.school.com",
    "phone": "+92-300-574-1305",
    "grade": 8,
    "class": "8G",
    "address": "98 Main St, London"
  },
  {
    "id": 136,
    "name": "Mark Bailey",
    "email": "mark.bailey@students.school.com",
    "phone": "+92-300-308-1306",
    "grade": 6,
    "class": "6B",
    "address": "98 Main St, London"
  },
  {
    "id": 137,
    "name": "Melissa Lee",
    "email": "melissa.lee@students.school.com",
    "phone": "+92-300-887-1308",
    "grade": 8,
    "class": "8G",
    "address": "160 Green Lane, Birmingham"
  },
  {
    "id": 138,
    "name": "Karen Lee",
    "email": "karen.lee@students.school.com",
    "phone": "+92-300-107-1309",
    "grade": 6,
    "class": "6G",
    "address": "160 Green Lane, Birmingham"
  },
  {
    "id": 139,
    "name": "Elizabeth Lee",
    "email": "elizabeth.lee@students.school.com",
    "phone": "+92-300-309-1310",
    "grade": 7,
    "class": "7G",
    "address": "160 Green Lane, Birmingham"
  },
  {
    "id": 140,
    "name": "Betty Griffin",
    "email": "betty.griffin@students.school.com",
    "phone": "+92-300-699-1312",
    "grade": 1,
    "class": "1G",
    "address": "52 Bridge Street, Birmingham"
  },
  {
    "id": 141,
    "name": "Elizabeth Henderson",
    "email": "elizabeth.henderson@students.school.com",
    "phone": "+92-300-834-1314",
    "grade": 1,
    "class": "1G",
    "address": "121 Elm Street, Austin"
  },
  {
    "id": 142,
    "name": "Elizabeth Gray",
    "email": "elizabeth.gray@students.school.com",
    "phone": "+92-300-919-1316",
    "grade": 2,
    "class": "2G",
    "address": "154 Queen Street, Manchester"
  },
  {
    "id": 143,
    "name": "Kimberly Rogers",
    "email": "kimberly.rogers@students.school.com",
    "phone": "+92-300-304-1318",
    "grade": 2,
    "class": "2G",
    "address": "163 High Street, Boston"
  },
  {
    "id": 144,
    "name": "William Jackson",
    "email": "william.jackson@students.school.com",
    "phone": "+92-300-691-1320",
    "grade": 4,
    "class": "4B",
    "address": "57 High Street, Leeds"
  }
];

export const lessonsData = [
  {
    "id": 1,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson"
  },
  {
    "id": 2,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward"
  },
  {
    "id": 3,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox"
  },
  {
    "id": 4,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 5,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward"
  },
  {
    "id": 6,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 7,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker"
  },
  {
    "id": 8,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward"
  },
  {
    "id": 9,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson"
  },
  {
    "id": 10,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson"
  },
  {
    "id": 11,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson"
  },
  {
    "id": 12,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson"
  },
  {
    "id": 13,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 14,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 15,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson"
  },
  {
    "id": 16,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 17,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall"
  },
  {
    "id": 18,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker"
  },
  {
    "id": 19,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox"
  },
  {
    "id": 20,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 21,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 22,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson"
  },
  {
    "id": 23,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 24,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox"
  },
  {
    "id": 25,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall"
  },
  {
    "id": 26,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson"
  },
  {
    "id": 27,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 28,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross"
  },
  {
    "id": 29,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 30,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin"
  },
  {
    "id": 31,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter"
  },
  {
    "id": 32,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz"
  },
  {
    "id": 33,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee"
  },
  {
    "id": 34,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz"
  },
  {
    "id": 35,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 36,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross"
  },
  {
    "id": 37,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson"
  },
  {
    "id": 38,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross"
  },
  {
    "id": 39,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 40,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 41,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 42,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin"
  },
  {
    "id": 43,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter"
  },
  {
    "id": 44,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 45,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee"
  },
  {
    "id": 46,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 47,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson"
  },
  {
    "id": 48,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 49,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 50,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 51,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 52,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson"
  },
  {
    "id": 53,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 54,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee"
  },
  {
    "id": 55,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter"
  },
  {
    "id": 56,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz"
  },
  {
    "id": 57,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson"
  },
  {
    "id": 58,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 59,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin"
  },
  {
    "id": 60,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross"
  },
  {
    "id": 61,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 62,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin"
  },
  {
    "id": 63,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 64,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross"
  },
  {
    "id": 65,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz"
  },
  {
    "id": 66,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin"
  },
  {
    "id": 67,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson"
  },
  {
    "id": 68,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee"
  },
  {
    "id": 69,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 70,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross"
  },
  {
    "id": 71,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson"
  },
  {
    "id": 72,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter"
  },
  {
    "id": 73,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin"
  },
  {
    "id": 74,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin"
  },
  {
    "id": 75,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 76,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 77,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 78,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward"
  },
  {
    "id": 79,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson"
  },
  {
    "id": 80,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall"
  },
  {
    "id": 81,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore"
  },
  {
    "id": 82,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward"
  },
  {
    "id": 83,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 84,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore"
  },
  {
    "id": 85,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 86,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross"
  },
  {
    "id": 87,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter"
  },
  {
    "id": 88,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall"
  },
  {
    "id": 89,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore"
  },
  {
    "id": 90,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter"
  },
  {
    "id": 91,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 92,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross"
  },
  {
    "id": 93,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward"
  },
  {
    "id": 94,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore"
  },
  {
    "id": 95,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson"
  },
  {
    "id": 96,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker"
  },
  {
    "id": 97,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers"
  },
  {
    "id": 98,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker"
  },
  {
    "id": 99,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson"
  },
  {
    "id": 100,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 101,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett"
  },
  {
    "id": 102,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson"
  },
  {
    "id": 103,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett"
  },
  {
    "id": 104,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 105,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson"
  },
  {
    "id": 106,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall"
  },
  {
    "id": 107,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson"
  },
  {
    "id": 108,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 109,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 110,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson"
  },
  {
    "id": 111,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 112,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 113,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 114,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker"
  },
  {
    "id": 115,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson"
  },
  {
    "id": 116,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker"
  },
  {
    "id": 117,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 118,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson"
  },
  {
    "id": 119,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 120,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson"
  },
  {
    "id": 121,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey"
  },
  {
    "id": 122,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler"
  },
  {
    "id": 123,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall"
  },
  {
    "id": 124,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett"
  },
  {
    "id": 125,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson"
  },
  {
    "id": 126,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox"
  },
  {
    "id": 127,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler"
  },
  {
    "id": 128,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee"
  },
  {
    "id": 129,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox"
  },
  {
    "id": 130,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee"
  },
  {
    "id": 131,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz"
  },
  {
    "id": 132,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross"
  },
  {
    "id": 133,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson"
  },
  {
    "id": 134,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz"
  },
  {
    "id": 135,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler"
  },
  {
    "id": 136,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz"
  },
  {
    "id": 137,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson"
  },
  {
    "id": 138,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz"
  },
  {
    "id": 139,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson"
  },
  {
    "id": 140,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox"
  },
  {
    "id": 141,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson"
  },
  {
    "id": 142,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross"
  },
  {
    "id": 143,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler"
  },
  {
    "id": 144,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross"
  },
  {
    "id": 145,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson"
  },
  {
    "id": 146,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross"
  },
  {
    "id": 147,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross"
  },
  {
    "id": 148,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross"
  },
  {
    "id": 149,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz"
  },
  {
    "id": 150,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz"
  },
  {
    "id": 151,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers"
  },
  {
    "id": 152,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans"
  },
  {
    "id": 153,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King"
  },
  {
    "id": 154,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson"
  },
  {
    "id": 155,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler"
  },
  {
    "id": 156,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King"
  },
  {
    "id": 157,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes"
  },
  {
    "id": 158,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed"
  },
  {
    "id": 159,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson"
  },
  {
    "id": 160,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore"
  },
  {
    "id": 161,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans"
  },
  {
    "id": 162,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 163,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler"
  },
  {
    "id": 164,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson"
  },
  {
    "id": 165,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore"
  },
  {
    "id": 166,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King"
  },
  {
    "id": 167,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson"
  },
  {
    "id": 168,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers"
  },
  {
    "id": 169,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 170,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore"
  },
  {
    "id": 171,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed"
  },
  {
    "id": 172,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson"
  },
  {
    "id": 173,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King"
  },
  {
    "id": 174,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes"
  },
  {
    "id": 175,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 176,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans"
  },
  {
    "id": 177,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 178,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee"
  },
  {
    "id": 179,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins"
  },
  {
    "id": 180,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 181,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins"
  },
  {
    "id": 182,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson"
  },
  {
    "id": 183,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers"
  },
  {
    "id": 184,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans"
  },
  {
    "id": 185,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore"
  },
  {
    "id": 186,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin"
  },
  {
    "id": 187,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins"
  },
  {
    "id": 188,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans"
  },
  {
    "id": 189,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore"
  },
  {
    "id": 190,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster"
  },
  {
    "id": 191,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins"
  },
  {
    "id": 192,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 193,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz"
  },
  {
    "id": 194,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee"
  },
  {
    "id": 195,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster"
  },
  {
    "id": 196,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin"
  },
  {
    "id": 197,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers"
  },
  {
    "id": 198,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz"
  },
  {
    "id": 199,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson"
  },
  {
    "id": 200,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster"
  },
  {
    "id": 201,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan"
  },
  {
    "id": 202,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson"
  },
  {
    "id": 203,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 204,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes"
  },
  {
    "id": 205,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King"
  },
  {
    "id": 206,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 207,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher"
  },
  {
    "id": 208,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins"
  },
  {
    "id": 209,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster"
  },
  {
    "id": 210,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan"
  },
  {
    "id": 211,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King"
  },
  {
    "id": 212,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins"
  },
  {
    "id": 213,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster"
  },
  {
    "id": 214,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes"
  },
  {
    "id": 215,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King"
  },
  {
    "id": 216,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster"
  },
  {
    "id": 217,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan"
  },
  {
    "id": 218,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher"
  },
  {
    "id": 219,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 220,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross"
  },
  {
    "id": 221,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson"
  },
  {
    "id": 222,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross"
  },
  {
    "id": 223,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson"
  },
  {
    "id": 224,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson"
  },
  {
    "id": 225,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 226,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster"
  },
  {
    "id": 227,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan"
  },
  {
    "id": 228,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans"
  },
  {
    "id": 229,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson"
  },
  {
    "id": 230,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross"
  },
  {
    "id": 231,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox"
  },
  {
    "id": 232,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson"
  },
  {
    "id": 233,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster"
  },
  {
    "id": 234,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson"
  },
  {
    "id": 235,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins"
  },
  {
    "id": 236,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox"
  },
  {
    "id": 237,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson"
  },
  {
    "id": 238,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan"
  },
  {
    "id": 239,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox"
  },
  {
    "id": 240,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans"
  },
  {
    "id": 241,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher"
  },
  {
    "id": 242,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins"
  },
  {
    "id": 243,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox"
  },
  {
    "id": 244,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross"
  },
  {
    "id": 245,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson"
  },
  {
    "id": 246,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan"
  },
  {
    "id": 247,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans"
  },
  {
    "id": 248,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher"
  },
  {
    "id": 249,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster"
  },
  {
    "id": 250,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson"
  },
  {
    "id": 251,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore"
  },
  {
    "id": 252,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 253,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz"
  },
  {
    "id": 254,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore"
  },
  {
    "id": 255,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore"
  },
  {
    "id": 256,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin"
  },
  {
    "id": 257,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 258,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz"
  },
  {
    "id": 259,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore"
  },
  {
    "id": 260,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 261,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee"
  },
  {
    "id": 262,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 263,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster"
  },
  {
    "id": 264,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler"
  },
  {
    "id": 265,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 266,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers"
  },
  {
    "id": 267,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 268,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster"
  },
  {
    "id": 269,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin"
  },
  {
    "id": 270,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers"
  },
  {
    "id": 271,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore"
  },
  {
    "id": 272,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster"
  },
  {
    "id": 273,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers"
  },
  {
    "id": 274,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee"
  },
  {
    "id": 275,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler"
  },
  {
    "id": 276,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster"
  },
  {
    "id": 277,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore"
  },
  {
    "id": 278,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes"
  },
  {
    "id": 279,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 280,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes"
  },
  {
    "id": 281,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young"
  },
  {
    "id": 282,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King"
  },
  {
    "id": 283,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 284,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin"
  },
  {
    "id": 285,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed"
  },
  {
    "id": 286,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young"
  },
  {
    "id": 287,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster"
  },
  {
    "id": 288,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes"
  },
  {
    "id": 289,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster"
  },
  {
    "id": 290,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young"
  },
  {
    "id": 291,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King"
  },
  {
    "id": 292,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes"
  },
  {
    "id": 293,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King"
  },
  {
    "id": 294,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore"
  },
  {
    "id": 295,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers"
  },
  {
    "id": 296,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young"
  },
  {
    "id": 297,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin"
  },
  {
    "id": 298,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers"
  },
  {
    "id": 299,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 300,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed"
  },
  {
    "id": 301,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes"
  },
  {
    "id": 302,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes"
  },
  {
    "id": 303,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson"
  },
  {
    "id": 304,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed"
  },
  {
    "id": 305,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 306,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross"
  },
  {
    "id": 307,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes"
  },
  {
    "id": 308,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill"
  },
  {
    "id": 309,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes"
  },
  {
    "id": 310,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz"
  },
  {
    "id": 311,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross"
  },
  {
    "id": 312,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores"
  },
  {
    "id": 313,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 314,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores"
  },
  {
    "id": 315,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz"
  },
  {
    "id": 316,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores"
  },
  {
    "id": 317,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed"
  },
  {
    "id": 318,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan"
  },
  {
    "id": 319,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz"
  },
  {
    "id": 320,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson"
  },
  {
    "id": 321,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores"
  },
  {
    "id": 322,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins"
  },
  {
    "id": 323,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill"
  },
  {
    "id": 324,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins"
  },
  {
    "id": 325,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson"
  },
  {
    "id": 326,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins"
  },
  {
    "id": 327,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill"
  },
  {
    "id": 328,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson"
  },
  {
    "id": 329,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan"
  },
  {
    "id": 330,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins"
  },
  {
    "id": 331,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan"
  },
  {
    "id": 332,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 333,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan"
  },
  {
    "id": 334,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson"
  },
  {
    "id": 335,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins"
  },
  {
    "id": 336,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz"
  },
  {
    "id": 337,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 338,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson"
  },
  {
    "id": 339,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz"
  },
  {
    "id": 340,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee"
  },
  {
    "id": 341,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill"
  },
  {
    "id": 342,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson"
  },
  {
    "id": 343,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee"
  },
  {
    "id": 344,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans"
  },
  {
    "id": 345,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz"
  },
  {
    "id": 346,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin"
  },
  {
    "id": 347,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson"
  },
  {
    "id": 348,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson"
  },
  {
    "id": 349,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins"
  },
  {
    "id": 350,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans"
  },
  {
    "id": 351,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill"
  },
  {
    "id": 352,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2"
  },
  {
    "id": 353,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill"
  },
  {
    "id": 354,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan"
  },
  {
    "id": 355,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan"
  },
  {
    "id": 356,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes"
  },
  {
    "id": 357,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill"
  },
  {
    "id": 358,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill"
  },
  {
    "id": 359,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler"
  },
  {
    "id": 360,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell"
  },
  {
    "id": 361,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell"
  },
  {
    "id": 362,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler"
  },
  {
    "id": 363,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2"
  },
  {
    "id": 364,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill"
  },
  {
    "id": 365,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2"
  },
  {
    "id": 366,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill"
  },
  {
    "id": 367,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell"
  },
  {
    "id": 368,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan"
  },
  {
    "id": 369,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill"
  },
  {
    "id": 370,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2"
  },
  {
    "id": 371,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell"
  },
  {
    "id": 372,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill"
  },
  {
    "id": 373,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2"
  },
  {
    "id": 374,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan"
  },
  {
    "id": 375,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan"
  },
  {
    "id": 376,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores"
  },
  {
    "id": 377,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker"
  },
  {
    "id": 378,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson"
  },
  {
    "id": 379,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee"
  },
  {
    "id": 380,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans"
  },
  {
    "id": 381,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins"
  },
  {
    "id": 382,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker"
  },
  {
    "id": 383,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores"
  },
  {
    "id": 384,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans"
  },
  {
    "id": 385,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins"
  },
  {
    "id": 386,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell"
  },
  {
    "id": 387,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee"
  },
  {
    "id": 388,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell"
  },
  {
    "id": 389,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 390,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores"
  },
  {
    "id": 391,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 392,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee"
  },
  {
    "id": 393,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins"
  },
  {
    "id": 394,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler"
  },
  {
    "id": 395,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes"
  },
  {
    "id": 396,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler"
  },
  {
    "id": 397,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 398,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell"
  },
  {
    "id": 399,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes"
  },
  {
    "id": 400,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz"
  },
  {
    "id": 401,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker"
  },
  {
    "id": 402,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans"
  },
  {
    "id": 403,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins"
  },
  {
    "id": 404,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores"
  },
  {
    "id": 405,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee"
  },
  {
    "id": 406,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores"
  },
  {
    "id": 407,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell"
  },
  {
    "id": 408,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell"
  },
  {
    "id": 409,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins"
  },
  {
    "id": 410,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz"
  },
  {
    "id": 411,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson"
  },
  {
    "id": 412,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell"
  },
  {
    "id": 413,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler"
  },
  {
    "id": 414,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell"
  },
  {
    "id": 415,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes"
  },
  {
    "id": 416,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee"
  },
  {
    "id": 417,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans"
  },
  {
    "id": 418,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores"
  },
  {
    "id": 419,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell"
  },
  {
    "id": 420,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins"
  },
  {
    "id": 421,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes"
  },
  {
    "id": 422,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee"
  },
  {
    "id": 423,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker"
  },
  {
    "id": 424,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell"
  },
  {
    "id": 425,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler"
  },
  {
    "id": 426,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2"
  },
  {
    "id": 427,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 428,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill"
  },
  {
    "id": 429,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan"
  },
  {
    "id": 430,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin"
  },
  {
    "id": 431,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson"
  },
  {
    "id": 432,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill"
  },
  {
    "id": 433,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson"
  },
  {
    "id": 434,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler"
  },
  {
    "id": 435,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson"
  },
  {
    "id": 436,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2"
  },
  {
    "id": 437,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson"
  },
  {
    "id": 438,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill"
  },
  {
    "id": 439,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler"
  },
  {
    "id": 440,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 441,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2"
  },
  {
    "id": 442,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2"
  },
  {
    "id": 443,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin"
  },
  {
    "id": 444,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2"
  },
  {
    "id": 445,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill"
  },
  {
    "id": 446,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill"
  },
  {
    "id": 447,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin"
  },
  {
    "id": 448,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan"
  },
  {
    "id": 449,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell"
  },
  {
    "id": 450,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 451,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 452,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan"
  },
  {
    "id": 453,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore"
  },
  {
    "id": 454,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker"
  },
  {
    "id": 455,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell"
  },
  {
    "id": 456,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan"
  },
  {
    "id": 457,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes"
  },
  {
    "id": 458,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill"
  },
  {
    "id": 459,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan"
  },
  {
    "id": 460,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill"
  },
  {
    "id": 461,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker"
  },
  {
    "id": 462,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore"
  },
  {
    "id": 463,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 464,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill"
  },
  {
    "id": 465,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan"
  },
  {
    "id": 466,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans"
  },
  {
    "id": 467,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler"
  },
  {
    "id": 468,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker"
  },
  {
    "id": 469,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson"
  },
  {
    "id": 470,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler"
  },
  {
    "id": 471,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill"
  },
  {
    "id": 472,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans"
  },
  {
    "id": 473,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore"
  },
  {
    "id": 474,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill"
  },
  {
    "id": 475,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan"
  },
  {
    "id": 476,
    "day": "Monday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes"
  },
  {
    "id": 477,
    "day": "Monday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson"
  },
  {
    "id": 478,
    "day": "Monday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker"
  },
  {
    "id": 479,
    "day": "Monday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes"
  },
  {
    "id": 480,
    "day": "Monday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker"
  },
  {
    "id": 481,
    "day": "Tuesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson"
  },
  {
    "id": 482,
    "day": "Tuesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2"
  },
  {
    "id": 483,
    "day": "Tuesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler"
  },
  {
    "id": 484,
    "day": "Tuesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker"
  },
  {
    "id": 485,
    "day": "Tuesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher"
  },
  {
    "id": 486,
    "day": "Wednesday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson"
  },
  {
    "id": 487,
    "day": "Wednesday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2"
  },
  {
    "id": 488,
    "day": "Wednesday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore"
  },
  {
    "id": 489,
    "day": "Wednesday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler"
  },
  {
    "id": 490,
    "day": "Wednesday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins"
  },
  {
    "id": 491,
    "day": "Thursday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher"
  },
  {
    "id": 492,
    "day": "Thursday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins"
  },
  {
    "id": 493,
    "day": "Thursday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz"
  },
  {
    "id": 494,
    "day": "Thursday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher"
  },
  {
    "id": 495,
    "day": "Thursday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore"
  },
  {
    "id": 496,
    "day": "Friday",
    "slot": 1,
    "startTime": "08:00",
    "endTime": "08:50",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson"
  },
  {
    "id": 497,
    "day": "Friday",
    "slot": 2,
    "startTime": "09:00",
    "endTime": "09:50",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins"
  },
  {
    "id": 498,
    "day": "Friday",
    "slot": 3,
    "startTime": "10:00",
    "endTime": "10:50",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes"
  },
  {
    "id": 499,
    "day": "Friday",
    "slot": 4,
    "startTime": "11:00",
    "endTime": "11:50",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore"
  },
  {
    "id": 500,
    "day": "Friday",
    "slot": 5,
    "startTime": "13:00",
    "endTime": "13:50",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson"
  }
];

export const examsData = [
  {
    "id": 1,
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26"
  },
  {
    "id": 2,
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01"
  },
  {
    "id": 3,
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14"
  },
  {
    "id": 4,
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12"
  },
  {
    "id": 5,
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02"
  },
  {
    "id": 6,
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30"
  },
  {
    "id": 7,
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08"
  },
  {
    "id": 8,
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11"
  },
  {
    "id": 9,
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14"
  },
  {
    "id": 10,
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28"
  },
  {
    "id": 11,
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08"
  },
  {
    "id": 12,
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06"
  },
  {
    "id": 13,
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03"
  },
  {
    "id": 14,
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13"
  },
  {
    "id": 15,
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06"
  },
  {
    "id": 16,
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16"
  },
  {
    "id": 17,
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07"
  },
  {
    "id": 18,
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24"
  },
  {
    "id": 19,
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20"
  },
  {
    "id": 20,
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19"
  },
  {
    "id": 21,
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01"
  },
  {
    "id": 22,
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06"
  },
  {
    "id": 23,
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22"
  },
  {
    "id": 24,
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13"
  },
  {
    "id": 25,
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06"
  },
  {
    "id": 26,
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03"
  },
  {
    "id": 27,
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13"
  },
  {
    "id": 28,
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08"
  },
  {
    "id": 29,
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03"
  },
  {
    "id": 30,
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30"
  },
  {
    "id": 31,
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27"
  },
  {
    "id": 32,
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09"
  },
  {
    "id": 33,
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11"
  },
  {
    "id": 34,
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06"
  },
  {
    "id": 35,
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02"
  },
  {
    "id": 36,
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04"
  },
  {
    "id": 37,
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02"
  },
  {
    "id": 38,
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13"
  },
  {
    "id": 39,
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28"
  },
  {
    "id": 40,
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04"
  },
  {
    "id": 41,
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09"
  },
  {
    "id": 42,
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19"
  },
  {
    "id": 43,
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17"
  },
  {
    "id": 44,
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09"
  },
  {
    "id": 45,
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20"
  },
  {
    "id": 46,
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23"
  },
  {
    "id": 47,
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21"
  },
  {
    "id": 48,
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07"
  },
  {
    "id": 49,
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29"
  },
  {
    "id": 50,
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11"
  },
  {
    "id": 51,
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31"
  },
  {
    "id": 52,
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09"
  },
  {
    "id": 53,
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21"
  },
  {
    "id": 54,
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16"
  },
  {
    "id": 55,
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27"
  },
  {
    "id": 56,
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02"
  },
  {
    "id": 57,
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15"
  },
  {
    "id": 58,
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23"
  },
  {
    "id": 59,
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22"
  },
  {
    "id": 60,
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16"
  },
  {
    "id": 61,
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22"
  },
  {
    "id": 62,
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06"
  },
  {
    "id": 63,
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11"
  },
  {
    "id": 64,
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03"
  },
  {
    "id": 65,
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21"
  },
  {
    "id": 66,
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10"
  },
  {
    "id": 67,
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24"
  },
  {
    "id": 68,
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04"
  },
  {
    "id": 69,
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30"
  },
  {
    "id": 70,
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14"
  },
  {
    "id": 71,
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04"
  },
  {
    "id": 72,
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12"
  },
  {
    "id": 73,
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16"
  },
  {
    "id": 74,
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27"
  },
  {
    "id": 75,
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03"
  },
  {
    "id": 76,
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10"
  },
  {
    "id": 77,
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11"
  },
  {
    "id": 78,
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14"
  },
  {
    "id": 79,
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01"
  },
  {
    "id": 80,
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17"
  },
  {
    "id": 81,
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15"
  },
  {
    "id": 82,
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12"
  },
  {
    "id": 83,
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29"
  },
  {
    "id": 84,
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13"
  },
  {
    "id": 85,
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14"
  },
  {
    "id": 86,
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19"
  },
  {
    "id": 87,
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26"
  },
  {
    "id": 88,
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22"
  },
  {
    "id": 89,
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02"
  },
  {
    "id": 90,
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14"
  },
  {
    "id": 91,
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14"
  },
  {
    "id": 92,
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17"
  },
  {
    "id": 93,
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11"
  },
  {
    "id": 94,
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07"
  },
  {
    "id": 95,
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11"
  },
  {
    "id": 96,
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08"
  },
  {
    "id": 97,
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14"
  },
  {
    "id": 98,
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20"
  },
  {
    "id": 99,
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05"
  },
  {
    "id": 100,
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05"
  },
  {
    "id": 101,
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01"
  },
  {
    "id": 102,
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24"
  },
  {
    "id": 103,
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10"
  },
  {
    "id": 104,
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08"
  },
  {
    "id": 105,
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01"
  },
  {
    "id": 106,
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02"
  },
  {
    "id": 107,
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18"
  },
  {
    "id": 108,
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29"
  },
  {
    "id": 109,
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07"
  },
  {
    "id": 110,
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20"
  },
  {
    "id": 111,
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27"
  },
  {
    "id": 112,
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14"
  },
  {
    "id": 113,
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29"
  },
  {
    "id": 114,
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07"
  },
  {
    "id": 115,
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30"
  },
  {
    "id": 116,
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21"
  },
  {
    "id": 117,
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14"
  },
  {
    "id": 118,
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25"
  },
  {
    "id": 119,
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15"
  },
  {
    "id": 120,
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14"
  },
  {
    "id": 121,
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23"
  },
  {
    "id": 122,
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22"
  },
  {
    "id": 123,
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09"
  },
  {
    "id": 124,
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13"
  },
  {
    "id": 125,
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06"
  },
  {
    "id": 126,
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12"
  },
  {
    "id": 127,
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07"
  },
  {
    "id": 128,
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12"
  },
  {
    "id": 129,
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12"
  },
  {
    "id": 130,
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10"
  },
  {
    "id": 131,
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07"
  },
  {
    "id": 132,
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04"
  },
  {
    "id": 133,
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17"
  },
  {
    "id": 134,
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06"
  },
  {
    "id": 135,
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07"
  },
  {
    "id": 136,
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04"
  },
  {
    "id": 137,
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19"
  },
  {
    "id": 138,
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18"
  },
  {
    "id": 139,
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09"
  },
  {
    "id": 140,
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23"
  },
  {
    "id": 141,
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04"
  },
  {
    "id": 142,
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12"
  },
  {
    "id": 143,
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24"
  },
  {
    "id": 144,
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17"
  },
  {
    "id": 145,
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24"
  },
  {
    "id": 146,
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03"
  },
  {
    "id": 147,
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08"
  },
  {
    "id": 148,
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16"
  },
  {
    "id": 149,
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11"
  },
  {
    "id": 150,
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25"
  },
  {
    "id": 151,
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02"
  },
  {
    "id": 152,
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11"
  },
  {
    "id": 153,
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15"
  },
  {
    "id": 154,
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25"
  },
  {
    "id": 155,
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24"
  },
  {
    "id": 156,
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11"
  },
  {
    "id": 157,
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31"
  },
  {
    "id": 158,
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01"
  },
  {
    "id": 159,
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07"
  },
  {
    "id": 160,
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25"
  },
  {
    "id": 161,
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24"
  },
  {
    "id": 162,
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19"
  },
  {
    "id": 163,
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31"
  },
  {
    "id": 164,
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01"
  },
  {
    "id": 165,
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08"
  },
  {
    "id": 166,
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05"
  },
  {
    "id": 167,
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01"
  },
  {
    "id": 168,
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-03-26"
  },
  {
    "id": 169,
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-04-01"
  },
  {
    "id": 170,
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-12"
  },
  {
    "id": 171,
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15"
  },
  {
    "id": 172,
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-29"
  },
  {
    "id": 173,
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-03-08"
  },
  {
    "id": 174,
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-03-05"
  },
  {
    "id": 175,
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-24"
  },
  {
    "id": 176,
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-03-31"
  },
  {
    "id": 177,
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-03-22"
  },
  {
    "id": 178,
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-04"
  },
  {
    "id": 179,
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02"
  },
  {
    "id": 180,
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31"
  },
  {
    "id": 181,
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14"
  },
  {
    "id": 182,
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09"
  },
  {
    "id": 183,
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25"
  },
  {
    "id": 184,
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04"
  },
  {
    "id": 185,
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28"
  },
  {
    "id": 186,
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04"
  },
  {
    "id": 187,
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03"
  },
  {
    "id": 188,
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02"
  },
  {
    "id": 189,
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21"
  },
  {
    "id": 190,
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07"
  },
  {
    "id": 191,
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31"
  },
  {
    "id": 192,
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30"
  },
  {
    "id": 193,
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30"
  },
  {
    "id": 194,
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09"
  },
  {
    "id": 195,
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29"
  },
  {
    "id": 196,
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21"
  },
  {
    "id": 197,
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14"
  },
  {
    "id": 198,
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12"
  },
  {
    "id": 199,
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24"
  },
  {
    "id": 200,
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08"
  }
];

export const assignmentsData = [
  {
    "id": 1,
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "dueDate": "2026-04-15"
  },
  {
    "id": 2,
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "dueDate": "2026-04-01"
  },
  {
    "id": 3,
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "dueDate": "2026-01-23"
  },
  {
    "id": 4,
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "dueDate": "2026-05-06"
  },
  {
    "id": 5,
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "dueDate": "2026-05-03"
  },
  {
    "id": 6,
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "dueDate": "2026-02-15"
  },
  {
    "id": 7,
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "dueDate": "2026-04-20"
  },
  {
    "id": 8,
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "dueDate": "2026-04-24"
  },
  {
    "id": 9,
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "dueDate": "2026-04-15"
  },
  {
    "id": 10,
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "dueDate": "2026-05-25"
  },
  {
    "id": 11,
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "dueDate": "2026-04-08"
  },
  {
    "id": 12,
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "dueDate": "2026-03-30"
  },
  {
    "id": 13,
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "dueDate": "2026-03-06"
  },
  {
    "id": 14,
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "dueDate": "2026-02-01"
  },
  {
    "id": 15,
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "dueDate": "2026-04-23"
  },
  {
    "id": 16,
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "dueDate": "2026-05-08"
  },
  {
    "id": 17,
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "dueDate": "2026-01-31"
  },
  {
    "id": 18,
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "dueDate": "2026-02-24"
  },
  {
    "id": 19,
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "dueDate": "2026-02-28"
  },
  {
    "id": 20,
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "dueDate": "2026-02-07"
  },
  {
    "id": 21,
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "dueDate": "2026-04-07"
  },
  {
    "id": 22,
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "dueDate": "2026-05-25"
  },
  {
    "id": 23,
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "dueDate": "2026-04-28"
  },
  {
    "id": 24,
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "dueDate": "2026-01-20"
  },
  {
    "id": 25,
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "dueDate": "2026-01-29"
  },
  {
    "id": 26,
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "dueDate": "2026-02-03"
  },
  {
    "id": 27,
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "dueDate": "2026-04-18"
  },
  {
    "id": 28,
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "dueDate": "2026-02-16"
  },
  {
    "id": 29,
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "dueDate": "2026-03-10"
  },
  {
    "id": 30,
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "dueDate": "2026-05-25"
  },
  {
    "id": 31,
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "dueDate": "2026-05-18"
  },
  {
    "id": 32,
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "dueDate": "2026-04-03"
  },
  {
    "id": 33,
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "dueDate": "2026-02-15"
  },
  {
    "id": 34,
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "dueDate": "2026-05-16"
  },
  {
    "id": 35,
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "dueDate": "2026-05-07"
  },
  {
    "id": 36,
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "dueDate": "2026-04-21"
  },
  {
    "id": 37,
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "dueDate": "2026-04-15"
  },
  {
    "id": 38,
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "dueDate": "2026-02-06"
  },
  {
    "id": 39,
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "dueDate": "2026-05-02"
  },
  {
    "id": 40,
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "dueDate": "2026-02-12"
  },
  {
    "id": 41,
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "dueDate": "2026-05-20"
  },
  {
    "id": 42,
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "dueDate": "2026-03-17"
  },
  {
    "id": 43,
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "dueDate": "2026-04-20"
  },
  {
    "id": 44,
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "dueDate": "2026-02-21"
  },
  {
    "id": 45,
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "dueDate": "2026-05-08"
  },
  {
    "id": 46,
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "dueDate": "2026-01-23"
  },
  {
    "id": 47,
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "dueDate": "2026-03-09"
  },
  {
    "id": 48,
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "dueDate": "2026-02-09"
  },
  {
    "id": 49,
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "dueDate": "2026-02-09"
  },
  {
    "id": 50,
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "dueDate": "2026-04-13"
  },
  {
    "id": 51,
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "dueDate": "2026-04-27"
  },
  {
    "id": 52,
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "dueDate": "2026-05-07"
  },
  {
    "id": 53,
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "dueDate": "2026-02-24"
  },
  {
    "id": 54,
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "dueDate": "2026-01-21"
  },
  {
    "id": 55,
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "dueDate": "2026-03-29"
  },
  {
    "id": 56,
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "dueDate": "2026-03-04"
  },
  {
    "id": 57,
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "dueDate": "2026-03-30"
  },
  {
    "id": 58,
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "dueDate": "2026-05-17"
  },
  {
    "id": 59,
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "dueDate": "2026-01-20"
  },
  {
    "id": 60,
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "dueDate": "2026-05-13"
  },
  {
    "id": 61,
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "dueDate": "2026-05-01"
  },
  {
    "id": 62,
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "dueDate": "2026-03-29"
  },
  {
    "id": 63,
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "dueDate": "2026-02-02"
  },
  {
    "id": 64,
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "dueDate": "2026-05-05"
  },
  {
    "id": 65,
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "dueDate": "2026-03-15"
  },
  {
    "id": 66,
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "dueDate": "2026-03-04"
  },
  {
    "id": 67,
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "dueDate": "2026-01-28"
  },
  {
    "id": 68,
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "dueDate": "2026-02-04"
  },
  {
    "id": 69,
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "dueDate": "2026-02-09"
  },
  {
    "id": 70,
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "dueDate": "2026-03-28"
  },
  {
    "id": 71,
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "dueDate": "2026-04-13"
  },
  {
    "id": 72,
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "dueDate": "2026-03-29"
  },
  {
    "id": 73,
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "dueDate": "2026-05-20"
  },
  {
    "id": 74,
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "dueDate": "2026-05-19"
  },
  {
    "id": 75,
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "dueDate": "2026-04-18"
  },
  {
    "id": 76,
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "dueDate": "2026-01-31"
  },
  {
    "id": 77,
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "dueDate": "2026-02-16"
  },
  {
    "id": 78,
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "dueDate": "2026-02-25"
  },
  {
    "id": 79,
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "dueDate": "2026-04-21"
  },
  {
    "id": 80,
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "dueDate": "2026-03-16"
  },
  {
    "id": 81,
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "dueDate": "2026-02-04"
  },
  {
    "id": 82,
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "dueDate": "2026-04-08"
  },
  {
    "id": 83,
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "dueDate": "2026-04-08"
  },
  {
    "id": 84,
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "dueDate": "2026-02-10"
  },
  {
    "id": 85,
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "dueDate": "2026-05-21"
  },
  {
    "id": 86,
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "dueDate": "2026-04-26"
  },
  {
    "id": 87,
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "dueDate": "2026-02-20"
  },
  {
    "id": 88,
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "dueDate": "2026-02-21"
  },
  {
    "id": 89,
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "dueDate": "2026-01-31"
  },
  {
    "id": 90,
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "dueDate": "2026-05-10"
  },
  {
    "id": 91,
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "dueDate": "2026-04-12"
  },
  {
    "id": 92,
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "dueDate": "2026-04-09"
  },
  {
    "id": 93,
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "dueDate": "2026-04-12"
  },
  {
    "id": 94,
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "dueDate": "2026-02-07"
  },
  {
    "id": 95,
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "dueDate": "2026-01-28"
  },
  {
    "id": 96,
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "dueDate": "2026-01-28"
  },
  {
    "id": 97,
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "dueDate": "2026-03-11"
  },
  {
    "id": 98,
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "dueDate": "2026-01-29"
  },
  {
    "id": 99,
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "dueDate": "2026-04-23"
  },
  {
    "id": 100,
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "dueDate": "2026-03-29"
  },
  {
    "id": 101,
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "dueDate": "2026-01-29"
  },
  {
    "id": 102,
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "dueDate": "2026-01-29"
  },
  {
    "id": 103,
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "dueDate": "2026-04-01"
  },
  {
    "id": 104,
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "dueDate": "2026-04-22"
  },
  {
    "id": 105,
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "dueDate": "2026-04-12"
  },
  {
    "id": 106,
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "dueDate": "2026-04-18"
  },
  {
    "id": 107,
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "dueDate": "2026-05-17"
  },
  {
    "id": 108,
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "dueDate": "2026-02-11"
  },
  {
    "id": 109,
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "dueDate": "2026-02-21"
  },
  {
    "id": 110,
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "dueDate": "2026-03-11"
  },
  {
    "id": 111,
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "dueDate": "2026-04-19"
  },
  {
    "id": 112,
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "dueDate": "2026-02-11"
  },
  {
    "id": 113,
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "dueDate": "2026-04-23"
  },
  {
    "id": 114,
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "dueDate": "2026-05-10"
  },
  {
    "id": 115,
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "dueDate": "2026-03-04"
  },
  {
    "id": 116,
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "dueDate": "2026-05-06"
  },
  {
    "id": 117,
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "dueDate": "2026-01-23"
  },
  {
    "id": 118,
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "dueDate": "2026-05-06"
  },
  {
    "id": 119,
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "dueDate": "2026-02-02"
  },
  {
    "id": 120,
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "dueDate": "2026-05-02"
  },
  {
    "id": 121,
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "dueDate": "2026-04-15"
  },
  {
    "id": 122,
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "dueDate": "2026-02-24"
  },
  {
    "id": 123,
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "dueDate": "2026-01-21"
  },
  {
    "id": 124,
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "dueDate": "2026-01-29"
  },
  {
    "id": 125,
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "dueDate": "2026-02-09"
  },
  {
    "id": 126,
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "dueDate": "2026-04-14"
  },
  {
    "id": 127,
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "dueDate": "2026-02-28"
  },
  {
    "id": 128,
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "dueDate": "2026-02-22"
  },
  {
    "id": 129,
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "dueDate": "2026-01-25"
  },
  {
    "id": 130,
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "dueDate": "2026-03-22"
  },
  {
    "id": 131,
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "dueDate": "2026-05-07"
  },
  {
    "id": 132,
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "dueDate": "2026-03-10"
  },
  {
    "id": 133,
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "dueDate": "2026-04-13"
  },
  {
    "id": 134,
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "dueDate": "2026-04-02"
  },
  {
    "id": 135,
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "dueDate": "2026-02-17"
  },
  {
    "id": 136,
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "dueDate": "2026-01-28"
  },
  {
    "id": 137,
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "dueDate": "2026-01-21"
  },
  {
    "id": 138,
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "dueDate": "2026-05-09"
  },
  {
    "id": 139,
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "dueDate": "2026-05-19"
  },
  {
    "id": 140,
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "dueDate": "2026-03-07"
  },
  {
    "id": 141,
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "dueDate": "2026-04-22"
  },
  {
    "id": 142,
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "dueDate": "2026-02-06"
  },
  {
    "id": 143,
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "dueDate": "2026-04-30"
  },
  {
    "id": 144,
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "dueDate": "2026-03-08"
  },
  {
    "id": 145,
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "dueDate": "2026-02-10"
  },
  {
    "id": 146,
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "dueDate": "2026-04-14"
  },
  {
    "id": 147,
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "dueDate": "2026-05-11"
  },
  {
    "id": 148,
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "dueDate": "2026-05-16"
  },
  {
    "id": 149,
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "dueDate": "2026-02-25"
  },
  {
    "id": 150,
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "dueDate": "2026-05-19"
  },
  {
    "id": 151,
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "dueDate": "2026-02-17"
  },
  {
    "id": 152,
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "dueDate": "2026-02-13"
  },
  {
    "id": 153,
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "dueDate": "2026-04-27"
  },
  {
    "id": 154,
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "dueDate": "2026-05-09"
  },
  {
    "id": 155,
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "dueDate": "2026-02-19"
  },
  {
    "id": 156,
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "dueDate": "2026-05-14"
  },
  {
    "id": 157,
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "dueDate": "2026-02-22"
  },
  {
    "id": 158,
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "dueDate": "2026-01-26"
  },
  {
    "id": 159,
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "dueDate": "2026-04-14"
  },
  {
    "id": 160,
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "dueDate": "2026-05-07"
  },
  {
    "id": 161,
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "dueDate": "2026-02-19"
  },
  {
    "id": 162,
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "dueDate": "2026-01-23"
  },
  {
    "id": 163,
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "dueDate": "2026-03-17"
  },
  {
    "id": 164,
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "dueDate": "2026-02-03"
  },
  {
    "id": 165,
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "dueDate": "2026-03-19"
  },
  {
    "id": 166,
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "dueDate": "2026-04-21"
  },
  {
    "id": 167,
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "dueDate": "2026-01-31"
  },
  {
    "id": 168,
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "dueDate": "2026-02-04"
  },
  {
    "id": 169,
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "dueDate": "2026-03-22"
  },
  {
    "id": 170,
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "dueDate": "2026-05-16"
  },
  {
    "id": 171,
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "dueDate": "2026-03-15"
  },
  {
    "id": 172,
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "dueDate": "2026-01-27"
  },
  {
    "id": 173,
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "dueDate": "2026-02-13"
  },
  {
    "id": 174,
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "dueDate": "2026-02-23"
  },
  {
    "id": 175,
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "dueDate": "2026-03-17"
  },
  {
    "id": 176,
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "dueDate": "2026-02-19"
  },
  {
    "id": 177,
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "dueDate": "2026-04-01"
  },
  {
    "id": 178,
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "dueDate": "2026-01-29"
  },
  {
    "id": 179,
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "dueDate": "2026-02-17"
  },
  {
    "id": 180,
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "dueDate": "2026-04-25"
  },
  {
    "id": 181,
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "dueDate": "2026-04-02"
  },
  {
    "id": 182,
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "dueDate": "2026-05-11"
  },
  {
    "id": 183,
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "dueDate": "2026-02-03"
  },
  {
    "id": 184,
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "dueDate": "2026-05-20"
  },
  {
    "id": 185,
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "dueDate": "2026-03-28"
  },
  {
    "id": 186,
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "dueDate": "2026-02-19"
  },
  {
    "id": 187,
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "dueDate": "2026-02-10"
  },
  {
    "id": 188,
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "dueDate": "2026-05-10"
  },
  {
    "id": 189,
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "dueDate": "2026-02-16"
  },
  {
    "id": 190,
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "dueDate": "2026-01-30"
  },
  {
    "id": 191,
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "dueDate": "2026-02-22"
  },
  {
    "id": 192,
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "dueDate": "2026-05-18"
  },
  {
    "id": 193,
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "dueDate": "2026-04-30"
  },
  {
    "id": 194,
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "dueDate": "2026-01-29"
  },
  {
    "id": 195,
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "dueDate": "2026-04-10"
  },
  {
    "id": 196,
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "dueDate": "2026-02-01"
  },
  {
    "id": 197,
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "dueDate": "2026-02-24"
  },
  {
    "id": 198,
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "dueDate": "2026-05-01"
  },
  {
    "id": 199,
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "dueDate": "2026-01-28"
  },
  {
    "id": 200,
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "dueDate": "2026-04-20"
  }
];

export const resultsData = [
  {
    "id": 1,
    "student": "Gregory King",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2,
    "student": "Gregory King",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 3,
    "student": "David Bailey",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 66
  },
  {
    "id": 4,
    "student": "David Bailey",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 5,
    "student": "David Moore",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 82
  },
  {
    "id": 6,
    "student": "David Moore",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 7,
    "student": "Ryan Jackson 2",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 90
  },
  {
    "id": 8,
    "student": "Ryan Jackson 2",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 9,
    "student": "Anthony Fisher 3",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 82
  },
  {
    "id": 10,
    "student": "Anthony Fisher 3",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 11,
    "student": "Andrew Griffin",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 91
  },
  {
    "id": 12,
    "student": "Andrew Griffin",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 13,
    "student": "Benjamin Hill",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 93
  },
  {
    "id": 14,
    "student": "Benjamin Hill",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 15,
    "student": "Steven Griffin",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-03-26",
    "type": "exam",
    "score": 52
  },
  {
    "id": 16,
    "student": "Steven Griffin",
    "subject": "Biology",
    "class": "10B",
    "teacher": "Gary Morgan",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 17,
    "student": "Gregory King",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 91
  },
  {
    "id": 18,
    "student": "Gregory King",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 19,
    "student": "David Bailey",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 99
  },
  {
    "id": 20,
    "student": "David Bailey",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 21,
    "student": "David Moore",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 92
  },
  {
    "id": 22,
    "student": "David Moore",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 23,
    "student": "Ryan Jackson 2",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 58
  },
  {
    "id": 24,
    "student": "Ryan Jackson 2",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 25,
    "student": "Anthony Fisher 3",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 73
  },
  {
    "id": 26,
    "student": "Anthony Fisher 3",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 27,
    "student": "Andrew Griffin",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 74
  },
  {
    "id": 28,
    "student": "Andrew Griffin",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 29,
    "student": "Benjamin Hill",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 97
  },
  {
    "id": 30,
    "student": "Benjamin Hill",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 31,
    "student": "Steven Griffin",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-03-01",
    "type": "exam",
    "score": 73
  },
  {
    "id": 32,
    "student": "Steven Griffin",
    "subject": "Chemistry",
    "class": "10B",
    "teacher": "Samantha Baker",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 33,
    "student": "Gregory King",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 91
  },
  {
    "id": 34,
    "student": "Gregory King",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 35,
    "student": "David Bailey",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 94
  },
  {
    "id": 36,
    "student": "David Bailey",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 37,
    "student": "David Moore",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 51
  },
  {
    "id": 38,
    "student": "David Moore",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 39,
    "student": "Ryan Jackson 2",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 79
  },
  {
    "id": 40,
    "student": "Ryan Jackson 2",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 41,
    "student": "Anthony Fisher 3",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 55
  },
  {
    "id": 42,
    "student": "Anthony Fisher 3",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 43,
    "student": "Andrew Griffin",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 63
  },
  {
    "id": 44,
    "student": "Andrew Griffin",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 45,
    "student": "Benjamin Hill",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 68
  },
  {
    "id": 46,
    "student": "Benjamin Hill",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 47,
    "student": "Steven Griffin",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 58
  },
  {
    "id": 48,
    "student": "Steven Griffin",
    "subject": "Computer Science",
    "class": "10B",
    "teacher": "Scott Butler",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 49,
    "student": "Gregory King",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 69
  },
  {
    "id": 50,
    "student": "Gregory King",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 51,
    "student": "David Bailey",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 70
  },
  {
    "id": 52,
    "student": "David Bailey",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 53,
    "student": "David Moore",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 62
  },
  {
    "id": 54,
    "student": "David Moore",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 55,
    "student": "Ryan Jackson 2",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 75
  },
  {
    "id": 56,
    "student": "Ryan Jackson 2",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 57,
    "student": "Anthony Fisher 3",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 93
  },
  {
    "id": 58,
    "student": "Anthony Fisher 3",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 59,
    "student": "Andrew Griffin",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 50
  },
  {
    "id": 60,
    "student": "Andrew Griffin",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 61,
    "student": "Benjamin Hill",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 80
  },
  {
    "id": 62,
    "student": "Benjamin Hill",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 63,
    "student": "Steven Griffin",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-03-12",
    "type": "exam",
    "score": 54
  },
  {
    "id": 64,
    "student": "Steven Griffin",
    "subject": "Economics",
    "class": "10B",
    "teacher": "Mary Powell",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 65,
    "student": "Gregory King",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 73
  },
  {
    "id": 66,
    "student": "Gregory King",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 67,
    "student": "David Bailey",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 97
  },
  {
    "id": 68,
    "student": "David Bailey",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 69,
    "student": "David Moore",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 93
  },
  {
    "id": 70,
    "student": "David Moore",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 71,
    "student": "Ryan Jackson 2",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 89
  },
  {
    "id": 72,
    "student": "Ryan Jackson 2",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 73,
    "student": "Anthony Fisher 3",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 62
  },
  {
    "id": 74,
    "student": "Anthony Fisher 3",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 75,
    "student": "Andrew Griffin",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 62
  },
  {
    "id": 76,
    "student": "Andrew Griffin",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 77,
    "student": "Benjamin Hill",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 100
  },
  {
    "id": 78,
    "student": "Benjamin Hill",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 79,
    "student": "Steven Griffin",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-04-02",
    "type": "exam",
    "score": 67
  },
  {
    "id": 80,
    "student": "Steven Griffin",
    "subject": "English Language",
    "class": "10B",
    "teacher": "Margaret Jackson",
    "date": "2026-05-03",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 81,
    "student": "Gregory King",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 98
  },
  {
    "id": 82,
    "student": "Gregory King",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 83,
    "student": "David Bailey",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 52
  },
  {
    "id": 84,
    "student": "David Bailey",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 85,
    "student": "David Moore",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 61
  },
  {
    "id": 86,
    "student": "David Moore",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 87,
    "student": "Ryan Jackson 2",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 76
  },
  {
    "id": 88,
    "student": "Ryan Jackson 2",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 89,
    "student": "Anthony Fisher 3",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 95
  },
  {
    "id": 90,
    "student": "Anthony Fisher 3",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 91,
    "student": "Andrew Griffin",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 86
  },
  {
    "id": 92,
    "student": "Andrew Griffin",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 93,
    "student": "Benjamin Hill",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 99
  },
  {
    "id": 94,
    "student": "Benjamin Hill",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 95,
    "student": "Steven Griffin",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-03-30",
    "type": "exam",
    "score": 65
  },
  {
    "id": 96,
    "student": "Steven Griffin",
    "subject": "Islamic Studies",
    "class": "10B",
    "teacher": "Heather Morgan",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 97,
    "student": "Gregory King",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 59
  },
  {
    "id": 98,
    "student": "Gregory King",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 99,
    "student": "David Bailey",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 66
  },
  {
    "id": 100,
    "student": "David Bailey",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 101,
    "student": "David Moore",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 79
  },
  {
    "id": 102,
    "student": "David Moore",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 103,
    "student": "Ryan Jackson 2",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 85
  },
  {
    "id": 104,
    "student": "Ryan Jackson 2",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 105,
    "student": "Anthony Fisher 3",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 95
  },
  {
    "id": 106,
    "student": "Anthony Fisher 3",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 107,
    "student": "Andrew Griffin",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 58
  },
  {
    "id": 108,
    "student": "Andrew Griffin",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 109,
    "student": "Benjamin Hill",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 65
  },
  {
    "id": 110,
    "student": "Benjamin Hill",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 111,
    "student": "Steven Griffin",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 57
  },
  {
    "id": 112,
    "student": "Steven Griffin",
    "subject": "Mathematics",
    "class": "10B",
    "teacher": "Patrick Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 113,
    "student": "Gregory King",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 76
  },
  {
    "id": 114,
    "student": "Gregory King",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 115,
    "student": "David Bailey",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 58
  },
  {
    "id": 116,
    "student": "David Bailey",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 117,
    "student": "David Moore",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 58
  },
  {
    "id": 118,
    "student": "David Moore",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 119,
    "student": "Ryan Jackson 2",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 70
  },
  {
    "id": 120,
    "student": "Ryan Jackson 2",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 121,
    "student": "Anthony Fisher 3",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 53
  },
  {
    "id": 122,
    "student": "Anthony Fisher 3",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 123,
    "student": "Andrew Griffin",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 64
  },
  {
    "id": 124,
    "student": "Andrew Griffin",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 125,
    "student": "Benjamin Hill",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 60
  },
  {
    "id": 126,
    "student": "Benjamin Hill",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 127,
    "student": "Steven Griffin",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-11",
    "type": "exam",
    "score": 87
  },
  {
    "id": 128,
    "student": "Steven Griffin",
    "subject": "Pakistan Studies",
    "class": "10B",
    "teacher": "Emily Barnes",
    "date": "2026-04-24",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 129,
    "student": "Gregory King",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 100
  },
  {
    "id": 130,
    "student": "Gregory King",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 131,
    "student": "David Bailey",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 66
  },
  {
    "id": 132,
    "student": "David Bailey",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 133,
    "student": "David Moore",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 92
  },
  {
    "id": 134,
    "student": "David Moore",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 135,
    "student": "Ryan Jackson 2",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 59
  },
  {
    "id": 136,
    "student": "Ryan Jackson 2",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 137,
    "student": "Anthony Fisher 3",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 67
  },
  {
    "id": 138,
    "student": "Anthony Fisher 3",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 139,
    "student": "Andrew Griffin",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 76
  },
  {
    "id": 140,
    "student": "Andrew Griffin",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 141,
    "student": "Benjamin Hill",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 53
  },
  {
    "id": 142,
    "student": "Benjamin Hill",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 143,
    "student": "Steven Griffin",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-03-14",
    "type": "exam",
    "score": 56
  },
  {
    "id": 144,
    "student": "Steven Griffin",
    "subject": "Physical Education",
    "class": "10B",
    "teacher": "Linda Evans",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 145,
    "student": "Gregory King",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 68
  },
  {
    "id": 146,
    "student": "Gregory King",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 147,
    "student": "David Bailey",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 68
  },
  {
    "id": 148,
    "student": "David Bailey",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 149,
    "student": "David Moore",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 61
  },
  {
    "id": 150,
    "student": "David Moore",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 151,
    "student": "Ryan Jackson 2",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 76
  },
  {
    "id": 152,
    "student": "Ryan Jackson 2",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 153,
    "student": "Anthony Fisher 3",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 83
  },
  {
    "id": 154,
    "student": "Anthony Fisher 3",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 155,
    "student": "Andrew Griffin",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 69
  },
  {
    "id": 156,
    "student": "Andrew Griffin",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 157,
    "student": "Benjamin Hill",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 91
  },
  {
    "id": 158,
    "student": "Benjamin Hill",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 159,
    "student": "Steven Griffin",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-03-28",
    "type": "exam",
    "score": 82
  },
  {
    "id": 160,
    "student": "Steven Griffin",
    "subject": "Physics",
    "class": "10B",
    "teacher": "Timothy Moore",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 161,
    "student": "Gregory King",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 57
  },
  {
    "id": 162,
    "student": "Gregory King",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 163,
    "student": "David Bailey",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 65
  },
  {
    "id": 164,
    "student": "David Bailey",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 165,
    "student": "David Moore",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 92
  },
  {
    "id": 166,
    "student": "David Moore",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 167,
    "student": "Ryan Jackson 2",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 87
  },
  {
    "id": 168,
    "student": "Ryan Jackson 2",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 169,
    "student": "Anthony Fisher 3",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 73
  },
  {
    "id": 170,
    "student": "Anthony Fisher 3",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 171,
    "student": "Andrew Griffin",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 85
  },
  {
    "id": 172,
    "student": "Andrew Griffin",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 173,
    "student": "Benjamin Hill",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 77
  },
  {
    "id": 174,
    "student": "Benjamin Hill",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 175,
    "student": "Steven Griffin",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 87
  },
  {
    "id": 176,
    "student": "Steven Griffin",
    "subject": "Urdu Language",
    "class": "10B",
    "teacher": "Shirley Hill",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 177,
    "student": "Jessica Henderson",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06",
    "type": "exam",
    "score": 86
  },
  {
    "id": 178,
    "student": "Jessica Henderson",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 179,
    "student": "Barbara Gray",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06",
    "type": "exam",
    "score": 61
  },
  {
    "id": 180,
    "student": "Barbara Gray",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 181,
    "student": "Donna Cox",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06",
    "type": "exam",
    "score": 66
  },
  {
    "id": 182,
    "student": "Donna Cox",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 183,
    "student": "Christine Lee 2",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06",
    "type": "exam",
    "score": 65
  },
  {
    "id": 184,
    "student": "Christine Lee 2",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 185,
    "student": "Patricia Reed",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06",
    "type": "exam",
    "score": 73
  },
  {
    "id": 186,
    "student": "Patricia Reed",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 187,
    "student": "Heather Bailey",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-06",
    "type": "exam",
    "score": 66
  },
  {
    "id": 188,
    "student": "Heather Bailey",
    "subject": "Biology",
    "class": "10G",
    "teacher": "Ryan Collins",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 189,
    "student": "Jessica Henderson",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03",
    "type": "exam",
    "score": 54
  },
  {
    "id": 190,
    "student": "Jessica Henderson",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-03-06",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 191,
    "student": "Barbara Gray",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03",
    "type": "exam",
    "score": 97
  },
  {
    "id": 192,
    "student": "Barbara Gray",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-03-06",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 193,
    "student": "Donna Cox",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03",
    "type": "exam",
    "score": 89
  },
  {
    "id": 194,
    "student": "Donna Cox",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-03-06",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 195,
    "student": "Christine Lee 2",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03",
    "type": "exam",
    "score": 80
  },
  {
    "id": 196,
    "student": "Christine Lee 2",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-03-06",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 197,
    "student": "Patricia Reed",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03",
    "type": "exam",
    "score": 93
  },
  {
    "id": 198,
    "student": "Patricia Reed",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-03-06",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 199,
    "student": "Heather Bailey",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-04-03",
    "type": "exam",
    "score": 50
  },
  {
    "id": 200,
    "student": "Heather Bailey",
    "subject": "Chemistry",
    "class": "10G",
    "teacher": "Samantha Baker",
    "date": "2026-03-06",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 201,
    "student": "Jessica Henderson",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13",
    "type": "exam",
    "score": 80
  },
  {
    "id": 202,
    "student": "Jessica Henderson",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 203,
    "student": "Barbara Gray",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13",
    "type": "exam",
    "score": 93
  },
  {
    "id": 204,
    "student": "Barbara Gray",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 205,
    "student": "Donna Cox",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13",
    "type": "exam",
    "score": 95
  },
  {
    "id": 206,
    "student": "Donna Cox",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 207,
    "student": "Christine Lee 2",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13",
    "type": "exam",
    "score": 61
  },
  {
    "id": 208,
    "student": "Christine Lee 2",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 209,
    "student": "Patricia Reed",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13",
    "type": "exam",
    "score": 70
  },
  {
    "id": 210,
    "student": "Patricia Reed",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 211,
    "student": "Heather Bailey",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-04-13",
    "type": "exam",
    "score": 64
  },
  {
    "id": 212,
    "student": "Heather Bailey",
    "subject": "Computer Science",
    "class": "10G",
    "teacher": "Scott Butler",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 213,
    "student": "Jessica Henderson",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 55
  },
  {
    "id": 214,
    "student": "Jessica Henderson",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 215,
    "student": "Barbara Gray",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 84
  },
  {
    "id": 216,
    "student": "Barbara Gray",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 217,
    "student": "Donna Cox",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 75
  },
  {
    "id": 218,
    "student": "Donna Cox",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 219,
    "student": "Christine Lee 2",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 97
  },
  {
    "id": 220,
    "student": "Christine Lee 2",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 221,
    "student": "Patricia Reed",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 73
  },
  {
    "id": 222,
    "student": "Patricia Reed",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 223,
    "student": "Heather Bailey",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 95
  },
  {
    "id": 224,
    "student": "Heather Bailey",
    "subject": "Economics",
    "class": "10G",
    "teacher": "Ryan Diaz",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 225,
    "student": "Jessica Henderson",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16",
    "type": "exam",
    "score": 74
  },
  {
    "id": 226,
    "student": "Jessica Henderson",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 227,
    "student": "Barbara Gray",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16",
    "type": "exam",
    "score": 81
  },
  {
    "id": 228,
    "student": "Barbara Gray",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 229,
    "student": "Donna Cox",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16",
    "type": "exam",
    "score": 73
  },
  {
    "id": 230,
    "student": "Donna Cox",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 231,
    "student": "Christine Lee 2",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16",
    "type": "exam",
    "score": 64
  },
  {
    "id": 232,
    "student": "Christine Lee 2",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 233,
    "student": "Patricia Reed",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16",
    "type": "exam",
    "score": 63
  },
  {
    "id": 234,
    "student": "Patricia Reed",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 235,
    "student": "Heather Bailey",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-03-16",
    "type": "exam",
    "score": 57
  },
  {
    "id": 236,
    "student": "Heather Bailey",
    "subject": "English Language",
    "class": "10G",
    "teacher": "Kathleen Fisher",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 237,
    "student": "Jessica Henderson",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 82
  },
  {
    "id": 238,
    "student": "Jessica Henderson",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 239,
    "student": "Barbara Gray",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 75
  },
  {
    "id": 240,
    "student": "Barbara Gray",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 241,
    "student": "Donna Cox",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 76
  },
  {
    "id": 242,
    "student": "Donna Cox",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 243,
    "student": "Christine Lee 2",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 54
  },
  {
    "id": 244,
    "student": "Christine Lee 2",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 245,
    "student": "Patricia Reed",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 87
  },
  {
    "id": 246,
    "student": "Patricia Reed",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 247,
    "student": "Heather Bailey",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 71
  },
  {
    "id": 248,
    "student": "Heather Bailey",
    "subject": "Islamic Studies",
    "class": "10G",
    "teacher": "Gary Thompson",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 249,
    "student": "Jessica Henderson",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 84
  },
  {
    "id": 250,
    "student": "Jessica Henderson",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 251,
    "student": "Barbara Gray",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 72
  },
  {
    "id": 252,
    "student": "Barbara Gray",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 253,
    "student": "Donna Cox",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 98
  },
  {
    "id": 254,
    "student": "Donna Cox",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 255,
    "student": "Christine Lee 2",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 70
  },
  {
    "id": 256,
    "student": "Christine Lee 2",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 257,
    "student": "Patricia Reed",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 80
  },
  {
    "id": 258,
    "student": "Patricia Reed",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 259,
    "student": "Heather Bailey",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 51
  },
  {
    "id": 260,
    "student": "Heather Bailey",
    "subject": "Mathematics",
    "class": "10G",
    "teacher": "Timothy Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 261,
    "student": "Jessica Henderson",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20",
    "type": "exam",
    "score": 93
  },
  {
    "id": 262,
    "student": "Jessica Henderson",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 263,
    "student": "Barbara Gray",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20",
    "type": "exam",
    "score": 60
  },
  {
    "id": 264,
    "student": "Barbara Gray",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 265,
    "student": "Donna Cox",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20",
    "type": "exam",
    "score": 73
  },
  {
    "id": 266,
    "student": "Donna Cox",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 267,
    "student": "Christine Lee 2",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20",
    "type": "exam",
    "score": 90
  },
  {
    "id": 268,
    "student": "Christine Lee 2",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 269,
    "student": "Patricia Reed",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20",
    "type": "exam",
    "score": 68
  },
  {
    "id": 270,
    "student": "Patricia Reed",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 271,
    "student": "Heather Bailey",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-03-20",
    "type": "exam",
    "score": 91
  },
  {
    "id": 272,
    "student": "Heather Bailey",
    "subject": "Pakistan Studies",
    "class": "10G",
    "teacher": "Emily Barnes",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 273,
    "student": "Jessica Henderson",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "exam",
    "score": 90
  },
  {
    "id": 274,
    "student": "Jessica Henderson",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 275,
    "student": "Barbara Gray",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "exam",
    "score": 95
  },
  {
    "id": 276,
    "student": "Barbara Gray",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 277,
    "student": "Donna Cox",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "exam",
    "score": 99
  },
  {
    "id": 278,
    "student": "Donna Cox",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 279,
    "student": "Christine Lee 2",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "exam",
    "score": 73
  },
  {
    "id": 280,
    "student": "Christine Lee 2",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 281,
    "student": "Patricia Reed",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "exam",
    "score": 69
  },
  {
    "id": 282,
    "student": "Patricia Reed",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 283,
    "student": "Heather Bailey",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "exam",
    "score": 66
  },
  {
    "id": 284,
    "student": "Heather Bailey",
    "subject": "Physical Education",
    "class": "10G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 285,
    "student": "Jessica Henderson",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01",
    "type": "exam",
    "score": 54
  },
  {
    "id": 286,
    "student": "Jessica Henderson",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-07",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 287,
    "student": "Barbara Gray",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01",
    "type": "exam",
    "score": 79
  },
  {
    "id": 288,
    "student": "Barbara Gray",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-07",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 289,
    "student": "Donna Cox",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01",
    "type": "exam",
    "score": 99
  },
  {
    "id": 290,
    "student": "Donna Cox",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-07",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 291,
    "student": "Christine Lee 2",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01",
    "type": "exam",
    "score": 52
  },
  {
    "id": 292,
    "student": "Christine Lee 2",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-07",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 293,
    "student": "Patricia Reed",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01",
    "type": "exam",
    "score": 50
  },
  {
    "id": 294,
    "student": "Patricia Reed",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-07",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 295,
    "student": "Heather Bailey",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-01",
    "type": "exam",
    "score": 84
  },
  {
    "id": 296,
    "student": "Heather Bailey",
    "subject": "Physics",
    "class": "10G",
    "teacher": "Timothy Moore",
    "date": "2026-04-07",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 297,
    "student": "Jessica Henderson",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06",
    "type": "exam",
    "score": 96
  },
  {
    "id": 298,
    "student": "Jessica Henderson",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 299,
    "student": "Barbara Gray",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06",
    "type": "exam",
    "score": 67
  },
  {
    "id": 300,
    "student": "Barbara Gray",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 301,
    "student": "Donna Cox",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06",
    "type": "exam",
    "score": 54
  },
  {
    "id": 302,
    "student": "Donna Cox",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 303,
    "student": "Christine Lee 2",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06",
    "type": "exam",
    "score": 61
  },
  {
    "id": 304,
    "student": "Christine Lee 2",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 305,
    "student": "Patricia Reed",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06",
    "type": "exam",
    "score": 94
  },
  {
    "id": 306,
    "student": "Patricia Reed",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 307,
    "student": "Heather Bailey",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-04-06",
    "type": "exam",
    "score": 50
  },
  {
    "id": 308,
    "student": "Heather Bailey",
    "subject": "Urdu Language",
    "class": "10G",
    "teacher": "Cynthia Barnes",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 309,
    "student": "Paul Reed",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 64
  },
  {
    "id": 310,
    "student": "Paul Reed",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 311,
    "student": "David Gray",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 66
  },
  {
    "id": 312,
    "student": "David Gray",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 313,
    "student": "Gregory Powell",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 100
  },
  {
    "id": 314,
    "student": "Gregory Powell",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 315,
    "student": "Gary Collins",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 51
  },
  {
    "id": 316,
    "student": "Gary Collins",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 317,
    "student": "Paul Cox",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 57
  },
  {
    "id": 318,
    "student": "Paul Cox",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 319,
    "student": "Ryan King",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 55
  },
  {
    "id": 320,
    "student": "Ryan King",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 321,
    "student": "Ryan Diaz 2",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 59
  },
  {
    "id": 322,
    "student": "Ryan Diaz 2",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 323,
    "student": "Robert Powell",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 71
  },
  {
    "id": 324,
    "student": "Robert Powell",
    "subject": "Art & Design",
    "class": "1B",
    "teacher": "Angela Wilson",
    "date": "2026-04-28",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 325,
    "student": "Paul Reed",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 83
  },
  {
    "id": 326,
    "student": "Paul Reed",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 327,
    "student": "David Gray",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 70
  },
  {
    "id": 328,
    "student": "David Gray",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 329,
    "student": "Gregory Powell",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 76
  },
  {
    "id": 330,
    "student": "Gregory Powell",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 331,
    "student": "Gary Collins",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 80
  },
  {
    "id": 332,
    "student": "Gary Collins",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 333,
    "student": "Paul Cox",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 71
  },
  {
    "id": 334,
    "student": "Paul Cox",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 335,
    "student": "Ryan King",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 55
  },
  {
    "id": 336,
    "student": "Ryan King",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 337,
    "student": "Ryan Diaz 2",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 60
  },
  {
    "id": 338,
    "student": "Ryan Diaz 2",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 339,
    "student": "Robert Powell",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-13",
    "type": "exam",
    "score": 55
  },
  {
    "id": 340,
    "student": "Robert Powell",
    "subject": "Computer Science",
    "class": "1B",
    "teacher": "Rachel Henderson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 341,
    "student": "Paul Reed",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 89
  },
  {
    "id": 342,
    "student": "Paul Reed",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 343,
    "student": "David Gray",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 94
  },
  {
    "id": 344,
    "student": "David Gray",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 345,
    "student": "Gregory Powell",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 58
  },
  {
    "id": 346,
    "student": "Gregory Powell",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 347,
    "student": "Gary Collins",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 96
  },
  {
    "id": 348,
    "student": "Gary Collins",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 349,
    "student": "Paul Cox",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 71
  },
  {
    "id": 350,
    "student": "Paul Cox",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 351,
    "student": "Ryan King",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 81
  },
  {
    "id": 352,
    "student": "Ryan King",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 353,
    "student": "Ryan Diaz 2",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 62
  },
  {
    "id": 354,
    "student": "Ryan Diaz 2",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 355,
    "student": "Robert Powell",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-06",
    "type": "exam",
    "score": 85
  },
  {
    "id": 356,
    "student": "Robert Powell",
    "subject": "English Language",
    "class": "1B",
    "teacher": "Raymond Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 357,
    "student": "Paul Reed",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 98
  },
  {
    "id": 358,
    "student": "Paul Reed",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 359,
    "student": "David Gray",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 94
  },
  {
    "id": 360,
    "student": "David Gray",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 361,
    "student": "Gregory Powell",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 74
  },
  {
    "id": 362,
    "student": "Gregory Powell",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 363,
    "student": "Gary Collins",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 95
  },
  {
    "id": 364,
    "student": "Gary Collins",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 365,
    "student": "Paul Cox",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 64
  },
  {
    "id": 366,
    "student": "Paul Cox",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 367,
    "student": "Ryan King",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 54
  },
  {
    "id": 368,
    "student": "Ryan King",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 369,
    "student": "Ryan Diaz 2",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 56
  },
  {
    "id": 370,
    "student": "Ryan Diaz 2",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 371,
    "student": "Robert Powell",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-03-03",
    "type": "exam",
    "score": 87
  },
  {
    "id": 372,
    "student": "Robert Powell",
    "subject": "General Science",
    "class": "1B",
    "teacher": "Sandra Cox",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 373,
    "student": "Paul Reed",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 62
  },
  {
    "id": 374,
    "student": "Paul Reed",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 375,
    "student": "David Gray",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 95
  },
  {
    "id": 376,
    "student": "David Gray",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 377,
    "student": "Gregory Powell",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 79
  },
  {
    "id": 378,
    "student": "Gregory Powell",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 379,
    "student": "Gary Collins",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 64
  },
  {
    "id": 380,
    "student": "Gary Collins",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 381,
    "student": "Paul Cox",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 55
  },
  {
    "id": 382,
    "student": "Paul Cox",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 383,
    "student": "Ryan King",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 80
  },
  {
    "id": 384,
    "student": "Ryan King",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 385,
    "student": "Ryan Diaz 2",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 77
  },
  {
    "id": 386,
    "student": "Ryan Diaz 2",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 387,
    "student": "Robert Powell",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-13",
    "type": "exam",
    "score": 50
  },
  {
    "id": 388,
    "student": "Robert Powell",
    "subject": "Islamic Studies",
    "class": "1B",
    "teacher": "Catherine Hall",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 389,
    "student": "Paul Reed",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 87
  },
  {
    "id": 390,
    "student": "Paul Reed",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 391,
    "student": "David Gray",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 56
  },
  {
    "id": 392,
    "student": "David Gray",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 393,
    "student": "Gregory Powell",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 79
  },
  {
    "id": 394,
    "student": "Gregory Powell",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 395,
    "student": "Gary Collins",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 98
  },
  {
    "id": 396,
    "student": "Gary Collins",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 397,
    "student": "Paul Cox",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 82
  },
  {
    "id": 398,
    "student": "Paul Cox",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 399,
    "student": "Ryan King",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 83
  },
  {
    "id": 400,
    "student": "Ryan King",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 401,
    "student": "Ryan Diaz 2",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 71
  },
  {
    "id": 402,
    "student": "Ryan Diaz 2",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 403,
    "student": "Robert Powell",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-04-08",
    "type": "exam",
    "score": 53
  },
  {
    "id": 404,
    "student": "Robert Powell",
    "subject": "Mathematics",
    "class": "1B",
    "teacher": "Jerry Butler",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 405,
    "student": "Paul Reed",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 64
  },
  {
    "id": 406,
    "student": "Paul Reed",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 407,
    "student": "David Gray",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 51
  },
  {
    "id": 408,
    "student": "David Gray",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 409,
    "student": "Gregory Powell",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 82
  },
  {
    "id": 410,
    "student": "Gregory Powell",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 411,
    "student": "Gary Collins",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 63
  },
  {
    "id": 412,
    "student": "Gary Collins",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 413,
    "student": "Paul Cox",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 95
  },
  {
    "id": 414,
    "student": "Paul Cox",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 415,
    "student": "Ryan King",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 79
  },
  {
    "id": 416,
    "student": "Ryan King",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 417,
    "student": "Ryan Diaz 2",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 62
  },
  {
    "id": 418,
    "student": "Ryan Diaz 2",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 419,
    "student": "Robert Powell",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-04-03",
    "type": "exam",
    "score": 63
  },
  {
    "id": 420,
    "student": "Robert Powell",
    "subject": "Physical Education",
    "class": "1B",
    "teacher": "Rachel Ward",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 421,
    "student": "Paul Reed",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 92
  },
  {
    "id": 422,
    "student": "Paul Reed",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 423,
    "student": "David Gray",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 58
  },
  {
    "id": 424,
    "student": "David Gray",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 425,
    "student": "Gregory Powell",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 53
  },
  {
    "id": 426,
    "student": "Gregory Powell",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 427,
    "student": "Gary Collins",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 79
  },
  {
    "id": 428,
    "student": "Gary Collins",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 429,
    "student": "Paul Cox",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 71
  },
  {
    "id": 430,
    "student": "Paul Cox",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 431,
    "student": "Ryan King",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 95
  },
  {
    "id": 432,
    "student": "Ryan King",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 433,
    "student": "Ryan Diaz 2",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 94
  },
  {
    "id": 434,
    "student": "Ryan Diaz 2",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 435,
    "student": "Robert Powell",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "exam",
    "score": 69
  },
  {
    "id": 436,
    "student": "Robert Powell",
    "subject": "Social Studies",
    "class": "1B",
    "teacher": "Charles Baker",
    "date": "2026-05-25",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 437,
    "student": "Paul Reed",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 70
  },
  {
    "id": 438,
    "student": "Paul Reed",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 439,
    "student": "David Gray",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 96
  },
  {
    "id": 440,
    "student": "David Gray",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 441,
    "student": "Gregory Powell",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 53
  },
  {
    "id": 442,
    "student": "Gregory Powell",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 443,
    "student": "Gary Collins",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 88
  },
  {
    "id": 444,
    "student": "Gary Collins",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 445,
    "student": "Paul Cox",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 55
  },
  {
    "id": 446,
    "student": "Paul Cox",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 447,
    "student": "Ryan King",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 53
  },
  {
    "id": 448,
    "student": "Ryan King",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 449,
    "student": "Ryan Diaz 2",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 82
  },
  {
    "id": 450,
    "student": "Ryan Diaz 2",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 451,
    "student": "Robert Powell",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 59
  },
  {
    "id": 452,
    "student": "Robert Powell",
    "subject": "Urdu Language",
    "class": "1B",
    "teacher": "Janet Henderson",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 453,
    "student": "Nancy Nelson",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 90
  },
  {
    "id": 454,
    "student": "Nancy Nelson",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 455,
    "student": "Rachel Henderson 2",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 79
  },
  {
    "id": 456,
    "student": "Rachel Henderson 2",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 457,
    "student": "Laura Rogers",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 62
  },
  {
    "id": 458,
    "student": "Laura Rogers",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 459,
    "student": "Janet Butler",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 57
  },
  {
    "id": 460,
    "student": "Janet Butler",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 461,
    "student": "Betty Rogers",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 82
  },
  {
    "id": 462,
    "student": "Betty Rogers",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 463,
    "student": "Betty Griffin",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 83
  },
  {
    "id": 464,
    "student": "Betty Griffin",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 465,
    "student": "Elizabeth Henderson",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 93
  },
  {
    "id": 466,
    "student": "Elizabeth Henderson",
    "subject": "Art & Design",
    "class": "1G",
    "teacher": "Richard Griffin",
    "date": "2026-04-03",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 467,
    "student": "Nancy Nelson",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 80
  },
  {
    "id": 468,
    "student": "Nancy Nelson",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 469,
    "student": "Rachel Henderson 2",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 69
  },
  {
    "id": 470,
    "student": "Rachel Henderson 2",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 471,
    "student": "Laura Rogers",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 54
  },
  {
    "id": 472,
    "student": "Laura Rogers",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 473,
    "student": "Janet Butler",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 92
  },
  {
    "id": 474,
    "student": "Janet Butler",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 475,
    "student": "Betty Rogers",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 89
  },
  {
    "id": 476,
    "student": "Betty Rogers",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 477,
    "student": "Betty Griffin",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 77
  },
  {
    "id": 478,
    "student": "Betty Griffin",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 479,
    "student": "Elizabeth Henderson",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-04-11",
    "type": "exam",
    "score": 54
  },
  {
    "id": 480,
    "student": "Elizabeth Henderson",
    "subject": "Computer Science",
    "class": "1G",
    "teacher": "Debra Carter",
    "date": "2026-02-15",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 481,
    "student": "Nancy Nelson",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 92
  },
  {
    "id": 482,
    "student": "Nancy Nelson",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 483,
    "student": "Rachel Henderson 2",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 64
  },
  {
    "id": 484,
    "student": "Rachel Henderson 2",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 485,
    "student": "Laura Rogers",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 70
  },
  {
    "id": 486,
    "student": "Laura Rogers",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 487,
    "student": "Janet Butler",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 95
  },
  {
    "id": 488,
    "student": "Janet Butler",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 489,
    "student": "Betty Rogers",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 99
  },
  {
    "id": 490,
    "student": "Betty Rogers",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 491,
    "student": "Betty Griffin",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 73
  },
  {
    "id": 492,
    "student": "Betty Griffin",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 493,
    "student": "Elizabeth Henderson",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-06",
    "type": "exam",
    "score": 78
  },
  {
    "id": 494,
    "student": "Elizabeth Henderson",
    "subject": "English Language",
    "class": "1G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 495,
    "student": "Nancy Nelson",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 96
  },
  {
    "id": 496,
    "student": "Nancy Nelson",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 497,
    "student": "Rachel Henderson 2",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 89
  },
  {
    "id": 498,
    "student": "Rachel Henderson 2",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 499,
    "student": "Laura Rogers",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 56
  },
  {
    "id": 500,
    "student": "Laura Rogers",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 501,
    "student": "Janet Butler",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 79
  },
  {
    "id": 502,
    "student": "Janet Butler",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 503,
    "student": "Betty Rogers",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 90
  },
  {
    "id": 504,
    "student": "Betty Rogers",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 505,
    "student": "Betty Griffin",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 58
  },
  {
    "id": 506,
    "student": "Betty Griffin",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 507,
    "student": "Elizabeth Henderson",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 85
  },
  {
    "id": 508,
    "student": "Elizabeth Henderson",
    "subject": "General Science",
    "class": "1G",
    "teacher": "Ryan Jackson",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 509,
    "student": "Nancy Nelson",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 54
  },
  {
    "id": 510,
    "student": "Nancy Nelson",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 511,
    "student": "Rachel Henderson 2",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 93
  },
  {
    "id": 512,
    "student": "Rachel Henderson 2",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 513,
    "student": "Laura Rogers",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 52
  },
  {
    "id": 514,
    "student": "Laura Rogers",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 515,
    "student": "Janet Butler",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 92
  },
  {
    "id": 516,
    "student": "Janet Butler",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 517,
    "student": "Betty Rogers",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 98
  },
  {
    "id": 518,
    "student": "Betty Rogers",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 519,
    "student": "Betty Griffin",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 99
  },
  {
    "id": 520,
    "student": "Betty Griffin",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 521,
    "student": "Elizabeth Henderson",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-04",
    "type": "exam",
    "score": 77
  },
  {
    "id": 522,
    "student": "Elizabeth Henderson",
    "subject": "Islamic Studies",
    "class": "1G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 523,
    "student": "Nancy Nelson",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 55
  },
  {
    "id": 524,
    "student": "Nancy Nelson",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 525,
    "student": "Rachel Henderson 2",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 75
  },
  {
    "id": 526,
    "student": "Rachel Henderson 2",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 527,
    "student": "Laura Rogers",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 56
  },
  {
    "id": 528,
    "student": "Laura Rogers",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 529,
    "student": "Janet Butler",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 97
  },
  {
    "id": 530,
    "student": "Janet Butler",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 531,
    "student": "Betty Rogers",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 52
  },
  {
    "id": 532,
    "student": "Betty Rogers",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 533,
    "student": "Betty Griffin",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 99
  },
  {
    "id": 534,
    "student": "Betty Griffin",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 535,
    "student": "Elizabeth Henderson",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-02",
    "type": "exam",
    "score": 58
  },
  {
    "id": 536,
    "student": "Elizabeth Henderson",
    "subject": "Mathematics",
    "class": "1G",
    "teacher": "Jonathan Henderson",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 537,
    "student": "Nancy Nelson",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 56
  },
  {
    "id": 538,
    "student": "Nancy Nelson",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 539,
    "student": "Rachel Henderson 2",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 54
  },
  {
    "id": 540,
    "student": "Rachel Henderson 2",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 541,
    "student": "Laura Rogers",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 60
  },
  {
    "id": 542,
    "student": "Laura Rogers",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 543,
    "student": "Janet Butler",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 88
  },
  {
    "id": 544,
    "student": "Janet Butler",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 545,
    "student": "Betty Rogers",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 60
  },
  {
    "id": 546,
    "student": "Betty Rogers",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 547,
    "student": "Betty Griffin",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 61
  },
  {
    "id": 548,
    "student": "Betty Griffin",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 549,
    "student": "Elizabeth Henderson",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-04-13",
    "type": "exam",
    "score": 98
  },
  {
    "id": 550,
    "student": "Elizabeth Henderson",
    "subject": "Physical Education",
    "class": "1G",
    "teacher": "Samantha Ross",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 551,
    "student": "Nancy Nelson",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 95
  },
  {
    "id": 552,
    "student": "Nancy Nelson",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 553,
    "student": "Rachel Henderson 2",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 73
  },
  {
    "id": 554,
    "student": "Rachel Henderson 2",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 555,
    "student": "Laura Rogers",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 65
  },
  {
    "id": 556,
    "student": "Laura Rogers",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 557,
    "student": "Janet Butler",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 85
  },
  {
    "id": 558,
    "student": "Janet Butler",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 559,
    "student": "Betty Rogers",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 55
  },
  {
    "id": 560,
    "student": "Betty Rogers",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 561,
    "student": "Betty Griffin",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 97
  },
  {
    "id": 562,
    "student": "Betty Griffin",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 563,
    "student": "Elizabeth Henderson",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-03-28",
    "type": "exam",
    "score": 74
  },
  {
    "id": 564,
    "student": "Elizabeth Henderson",
    "subject": "Social Studies",
    "class": "1G",
    "teacher": "Barbara Lee",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 565,
    "student": "Nancy Nelson",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 64
  },
  {
    "id": 566,
    "student": "Nancy Nelson",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 567,
    "student": "Rachel Henderson 2",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 88
  },
  {
    "id": 568,
    "student": "Rachel Henderson 2",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 569,
    "student": "Laura Rogers",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 98
  },
  {
    "id": 570,
    "student": "Laura Rogers",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 571,
    "student": "Janet Butler",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 75
  },
  {
    "id": 572,
    "student": "Janet Butler",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 573,
    "student": "Betty Rogers",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 62
  },
  {
    "id": 574,
    "student": "Betty Rogers",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 575,
    "student": "Betty Griffin",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 100
  },
  {
    "id": 576,
    "student": "Betty Griffin",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 577,
    "student": "Elizabeth Henderson",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-04",
    "type": "exam",
    "score": 97
  },
  {
    "id": 578,
    "student": "Elizabeth Henderson",
    "subject": "Urdu Language",
    "class": "1G",
    "teacher": "Jerry Bailey",
    "date": "2026-02-12",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 579,
    "student": "Benjamin Cox",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 81
  },
  {
    "id": 580,
    "student": "Benjamin Cox",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 581,
    "student": "Samuel Butler",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 82
  },
  {
    "id": 582,
    "student": "Samuel Butler",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 583,
    "student": "Anthony Fisher 2",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 65
  },
  {
    "id": 584,
    "student": "Anthony Fisher 2",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 585,
    "student": "Gregory Bennett",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 66
  },
  {
    "id": 586,
    "student": "Gregory Bennett",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 587,
    "student": "Frank Lee",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 80
  },
  {
    "id": 588,
    "student": "Frank Lee",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 589,
    "student": "Jacob Thompson",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 59
  },
  {
    "id": 590,
    "student": "Jacob Thompson",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 591,
    "student": "Gregory Reed",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 70
  },
  {
    "id": 592,
    "student": "Gregory Reed",
    "subject": "Art & Design",
    "class": "2B",
    "teacher": "Richard Griffin",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 593,
    "student": "Benjamin Cox",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 61
  },
  {
    "id": 594,
    "student": "Benjamin Cox",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 595,
    "student": "Samuel Butler",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 97
  },
  {
    "id": 596,
    "student": "Samuel Butler",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 597,
    "student": "Anthony Fisher 2",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 93
  },
  {
    "id": 598,
    "student": "Anthony Fisher 2",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 599,
    "student": "Gregory Bennett",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 92
  },
  {
    "id": 600,
    "student": "Gregory Bennett",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 601,
    "student": "Frank Lee",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 53
  },
  {
    "id": 602,
    "student": "Frank Lee",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 603,
    "student": "Jacob Thompson",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 64
  },
  {
    "id": 604,
    "student": "Jacob Thompson",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 605,
    "student": "Gregory Reed",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-19",
    "type": "exam",
    "score": 72
  },
  {
    "id": 606,
    "student": "Gregory Reed",
    "subject": "Computer Science",
    "class": "2B",
    "teacher": "Debra Carter",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 607,
    "student": "Benjamin Cox",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 100
  },
  {
    "id": 608,
    "student": "Benjamin Cox",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 609,
    "student": "Samuel Butler",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 66
  },
  {
    "id": 610,
    "student": "Samuel Butler",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 611,
    "student": "Anthony Fisher 2",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 52
  },
  {
    "id": 612,
    "student": "Anthony Fisher 2",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 613,
    "student": "Gregory Bennett",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 70
  },
  {
    "id": 614,
    "student": "Gregory Bennett",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 615,
    "student": "Frank Lee",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 70
  },
  {
    "id": 616,
    "student": "Frank Lee",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 617,
    "student": "Jacob Thompson",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 73
  },
  {
    "id": 618,
    "student": "Jacob Thompson",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 619,
    "student": "Gregory Reed",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-03-17",
    "type": "exam",
    "score": 73
  },
  {
    "id": 620,
    "student": "Gregory Reed",
    "subject": "English Language",
    "class": "2B",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 621,
    "student": "Benjamin Cox",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 72
  },
  {
    "id": 622,
    "student": "Benjamin Cox",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 623,
    "student": "Samuel Butler",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 74
  },
  {
    "id": 624,
    "student": "Samuel Butler",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 625,
    "student": "Anthony Fisher 2",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 57
  },
  {
    "id": 626,
    "student": "Anthony Fisher 2",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 627,
    "student": "Gregory Bennett",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 50
  },
  {
    "id": 628,
    "student": "Gregory Bennett",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 629,
    "student": "Frank Lee",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 76
  },
  {
    "id": 630,
    "student": "Frank Lee",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 631,
    "student": "Jacob Thompson",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 90
  },
  {
    "id": 632,
    "student": "Jacob Thompson",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 633,
    "student": "Gregory Reed",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-03-09",
    "type": "exam",
    "score": 86
  },
  {
    "id": 634,
    "student": "Gregory Reed",
    "subject": "General Science",
    "class": "2B",
    "teacher": "Jennifer Griffin",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 635,
    "student": "Benjamin Cox",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 65
  },
  {
    "id": 636,
    "student": "Benjamin Cox",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 637,
    "student": "Samuel Butler",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 53
  },
  {
    "id": 638,
    "student": "Samuel Butler",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 639,
    "student": "Anthony Fisher 2",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 60
  },
  {
    "id": 640,
    "student": "Anthony Fisher 2",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 641,
    "student": "Gregory Bennett",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 59
  },
  {
    "id": 642,
    "student": "Gregory Bennett",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 643,
    "student": "Frank Lee",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 66
  },
  {
    "id": 644,
    "student": "Frank Lee",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 645,
    "student": "Jacob Thompson",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 91
  },
  {
    "id": 646,
    "student": "Jacob Thompson",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 647,
    "student": "Gregory Reed",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-03-20",
    "type": "exam",
    "score": 74
  },
  {
    "id": 648,
    "student": "Gregory Reed",
    "subject": "Islamic Studies",
    "class": "2B",
    "teacher": "Raymond Cruz",
    "date": "2026-05-08",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 649,
    "student": "Benjamin Cox",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 69
  },
  {
    "id": 650,
    "student": "Benjamin Cox",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 651,
    "student": "Samuel Butler",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 65
  },
  {
    "id": 652,
    "student": "Samuel Butler",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 653,
    "student": "Anthony Fisher 2",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 95
  },
  {
    "id": 654,
    "student": "Anthony Fisher 2",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 655,
    "student": "Gregory Bennett",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 92
  },
  {
    "id": 656,
    "student": "Gregory Bennett",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 657,
    "student": "Frank Lee",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 72
  },
  {
    "id": 658,
    "student": "Frank Lee",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 659,
    "student": "Jacob Thompson",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 70
  },
  {
    "id": 660,
    "student": "Jacob Thompson",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 661,
    "student": "Gregory Reed",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-03-23",
    "type": "exam",
    "score": 58
  },
  {
    "id": 662,
    "student": "Gregory Reed",
    "subject": "Mathematics",
    "class": "2B",
    "teacher": "Jonathan Henderson",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 663,
    "student": "Benjamin Cox",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 93
  },
  {
    "id": 664,
    "student": "Benjamin Cox",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 665,
    "student": "Samuel Butler",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 91
  },
  {
    "id": 666,
    "student": "Samuel Butler",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 667,
    "student": "Anthony Fisher 2",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 100
  },
  {
    "id": 668,
    "student": "Anthony Fisher 2",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 669,
    "student": "Gregory Bennett",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 79
  },
  {
    "id": 670,
    "student": "Gregory Bennett",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 671,
    "student": "Frank Lee",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 80
  },
  {
    "id": 672,
    "student": "Frank Lee",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 673,
    "student": "Jacob Thompson",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 79
  },
  {
    "id": 674,
    "student": "Jacob Thompson",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 675,
    "student": "Gregory Reed",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-21",
    "type": "exam",
    "score": 97
  },
  {
    "id": 676,
    "student": "Gregory Reed",
    "subject": "Physical Education",
    "class": "2B",
    "teacher": "Samantha Ross",
    "date": "2026-03-09",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 677,
    "student": "Benjamin Cox",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 96
  },
  {
    "id": 678,
    "student": "Benjamin Cox",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 679,
    "student": "Samuel Butler",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 73
  },
  {
    "id": 680,
    "student": "Samuel Butler",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 681,
    "student": "Anthony Fisher 2",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 54
  },
  {
    "id": 682,
    "student": "Anthony Fisher 2",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 683,
    "student": "Gregory Bennett",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 57
  },
  {
    "id": 684,
    "student": "Gregory Bennett",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 685,
    "student": "Frank Lee",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 51
  },
  {
    "id": 686,
    "student": "Frank Lee",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 687,
    "student": "Jacob Thompson",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 51
  },
  {
    "id": 688,
    "student": "Jacob Thompson",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 689,
    "student": "Gregory Reed",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-03-07",
    "type": "exam",
    "score": 73
  },
  {
    "id": 690,
    "student": "Gregory Reed",
    "subject": "Social Studies",
    "class": "2B",
    "teacher": "Barbara Lee",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 691,
    "student": "Benjamin Cox",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 89
  },
  {
    "id": 692,
    "student": "Benjamin Cox",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 693,
    "student": "Samuel Butler",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 81
  },
  {
    "id": 694,
    "student": "Samuel Butler",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 695,
    "student": "Anthony Fisher 2",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 53
  },
  {
    "id": 696,
    "student": "Anthony Fisher 2",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 697,
    "student": "Gregory Bennett",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 79
  },
  {
    "id": 698,
    "student": "Gregory Bennett",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 699,
    "student": "Frank Lee",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 75
  },
  {
    "id": 700,
    "student": "Frank Lee",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 701,
    "student": "Jacob Thompson",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 80
  },
  {
    "id": 702,
    "student": "Jacob Thompson",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 703,
    "student": "Gregory Reed",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 69
  },
  {
    "id": 704,
    "student": "Gregory Reed",
    "subject": "Urdu Language",
    "class": "2B",
    "teacher": "Janet Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 705,
    "student": "Sandra Hill",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 90
  },
  {
    "id": 706,
    "student": "Sandra Hill",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 707,
    "student": "Emily Gray",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 80
  },
  {
    "id": 708,
    "student": "Emily Gray",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 709,
    "student": "Anna Foster",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 72
  },
  {
    "id": 710,
    "student": "Anna Foster",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 711,
    "student": "Margaret Lee",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 69
  },
  {
    "id": 712,
    "student": "Margaret Lee",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 713,
    "student": "Ruth Carter",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 72
  },
  {
    "id": 714,
    "student": "Ruth Carter",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 715,
    "student": "Rachel Foster",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 56
  },
  {
    "id": 716,
    "student": "Rachel Foster",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 717,
    "student": "Elizabeth Gray",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 87
  },
  {
    "id": 718,
    "student": "Elizabeth Gray",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 719,
    "student": "Kimberly Rogers",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-11",
    "type": "exam",
    "score": 54
  },
  {
    "id": 720,
    "student": "Kimberly Rogers",
    "subject": "Art & Design",
    "class": "2G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 721,
    "student": "Sandra Hill",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 78
  },
  {
    "id": 722,
    "student": "Sandra Hill",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 723,
    "student": "Emily Gray",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 50
  },
  {
    "id": 724,
    "student": "Emily Gray",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 725,
    "student": "Anna Foster",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 64
  },
  {
    "id": 726,
    "student": "Anna Foster",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 727,
    "student": "Margaret Lee",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 63
  },
  {
    "id": 728,
    "student": "Margaret Lee",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 729,
    "student": "Ruth Carter",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 84
  },
  {
    "id": 730,
    "student": "Ruth Carter",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 731,
    "student": "Rachel Foster",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 92
  },
  {
    "id": 732,
    "student": "Rachel Foster",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 733,
    "student": "Elizabeth Gray",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 57
  },
  {
    "id": 734,
    "student": "Elizabeth Gray",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 735,
    "student": "Kimberly Rogers",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-03-31",
    "type": "exam",
    "score": 86
  },
  {
    "id": 736,
    "student": "Kimberly Rogers",
    "subject": "Computer Science",
    "class": "2G",
    "teacher": "Debra Carter",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 737,
    "student": "Sandra Hill",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 79
  },
  {
    "id": 738,
    "student": "Sandra Hill",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 739,
    "student": "Emily Gray",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 86
  },
  {
    "id": 740,
    "student": "Emily Gray",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 741,
    "student": "Anna Foster",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 51
  },
  {
    "id": 742,
    "student": "Anna Foster",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 743,
    "student": "Margaret Lee",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 58
  },
  {
    "id": 744,
    "student": "Margaret Lee",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 745,
    "student": "Ruth Carter",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 55
  },
  {
    "id": 746,
    "student": "Ruth Carter",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 747,
    "student": "Rachel Foster",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 83
  },
  {
    "id": 748,
    "student": "Rachel Foster",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 749,
    "student": "Elizabeth Gray",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 82
  },
  {
    "id": 750,
    "student": "Elizabeth Gray",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 751,
    "student": "Kimberly Rogers",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-04-09",
    "type": "exam",
    "score": 97
  },
  {
    "id": 752,
    "student": "Kimberly Rogers",
    "subject": "English Language",
    "class": "2G",
    "teacher": "Carolyn Rogers",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 753,
    "student": "Sandra Hill",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 56
  },
  {
    "id": 754,
    "student": "Sandra Hill",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 755,
    "student": "Emily Gray",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 100
  },
  {
    "id": 756,
    "student": "Emily Gray",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 757,
    "student": "Anna Foster",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 88
  },
  {
    "id": 758,
    "student": "Anna Foster",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 759,
    "student": "Margaret Lee",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 64
  },
  {
    "id": 760,
    "student": "Margaret Lee",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 761,
    "student": "Ruth Carter",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 97
  },
  {
    "id": 762,
    "student": "Ruth Carter",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 763,
    "student": "Rachel Foster",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 60
  },
  {
    "id": 764,
    "student": "Rachel Foster",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 765,
    "student": "Elizabeth Gray",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 90
  },
  {
    "id": 766,
    "student": "Elizabeth Gray",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 767,
    "student": "Kimberly Rogers",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 54
  },
  {
    "id": 768,
    "student": "Kimberly Rogers",
    "subject": "General Science",
    "class": "2G",
    "teacher": "Ryan Jackson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 769,
    "student": "Sandra Hill",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 62
  },
  {
    "id": 770,
    "student": "Sandra Hill",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 771,
    "student": "Emily Gray",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 69
  },
  {
    "id": 772,
    "student": "Emily Gray",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 773,
    "student": "Anna Foster",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 82
  },
  {
    "id": 774,
    "student": "Anna Foster",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 775,
    "student": "Margaret Lee",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 61
  },
  {
    "id": 776,
    "student": "Margaret Lee",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 777,
    "student": "Ruth Carter",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 84
  },
  {
    "id": 778,
    "student": "Ruth Carter",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 779,
    "student": "Rachel Foster",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 82
  },
  {
    "id": 780,
    "student": "Rachel Foster",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 781,
    "student": "Elizabeth Gray",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 92
  },
  {
    "id": 782,
    "student": "Elizabeth Gray",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 783,
    "student": "Kimberly Rogers",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-03-16",
    "type": "exam",
    "score": 88
  },
  {
    "id": 784,
    "student": "Kimberly Rogers",
    "subject": "Islamic Studies",
    "class": "2G",
    "teacher": "Catherine Hall",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 785,
    "student": "Sandra Hill",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 85
  },
  {
    "id": 786,
    "student": "Sandra Hill",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 787,
    "student": "Emily Gray",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 60
  },
  {
    "id": 788,
    "student": "Emily Gray",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 789,
    "student": "Anna Foster",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 51
  },
  {
    "id": 790,
    "student": "Anna Foster",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 791,
    "student": "Margaret Lee",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 85
  },
  {
    "id": 792,
    "student": "Margaret Lee",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 793,
    "student": "Ruth Carter",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 57
  },
  {
    "id": 794,
    "student": "Ruth Carter",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 795,
    "student": "Rachel Foster",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 73
  },
  {
    "id": 796,
    "student": "Rachel Foster",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 797,
    "student": "Elizabeth Gray",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 53
  },
  {
    "id": 798,
    "student": "Elizabeth Gray",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 799,
    "student": "Kimberly Rogers",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-27",
    "type": "exam",
    "score": 82
  },
  {
    "id": 800,
    "student": "Kimberly Rogers",
    "subject": "Mathematics",
    "class": "2G",
    "teacher": "Joseph Moore",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 801,
    "student": "Sandra Hill",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 82
  },
  {
    "id": 802,
    "student": "Sandra Hill",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 803,
    "student": "Emily Gray",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 95
  },
  {
    "id": 804,
    "student": "Emily Gray",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 805,
    "student": "Anna Foster",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 82
  },
  {
    "id": 806,
    "student": "Anna Foster",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 807,
    "student": "Margaret Lee",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 59
  },
  {
    "id": 808,
    "student": "Margaret Lee",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 809,
    "student": "Ruth Carter",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 63
  },
  {
    "id": 810,
    "student": "Ruth Carter",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 811,
    "student": "Rachel Foster",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 59
  },
  {
    "id": 812,
    "student": "Rachel Foster",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 813,
    "student": "Elizabeth Gray",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 78
  },
  {
    "id": 814,
    "student": "Elizabeth Gray",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 815,
    "student": "Kimberly Rogers",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-02",
    "type": "exam",
    "score": 77
  },
  {
    "id": 816,
    "student": "Kimberly Rogers",
    "subject": "Physical Education",
    "class": "2G",
    "teacher": "Rachel Ward",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 817,
    "student": "Sandra Hill",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 88
  },
  {
    "id": 818,
    "student": "Sandra Hill",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 819,
    "student": "Emily Gray",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 66
  },
  {
    "id": 820,
    "student": "Emily Gray",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 821,
    "student": "Anna Foster",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 67
  },
  {
    "id": 822,
    "student": "Anna Foster",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 823,
    "student": "Margaret Lee",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 76
  },
  {
    "id": 824,
    "student": "Margaret Lee",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 825,
    "student": "Ruth Carter",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 82
  },
  {
    "id": 826,
    "student": "Ruth Carter",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 827,
    "student": "Rachel Foster",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 79
  },
  {
    "id": 828,
    "student": "Rachel Foster",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 829,
    "student": "Elizabeth Gray",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 55
  },
  {
    "id": 830,
    "student": "Elizabeth Gray",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 831,
    "student": "Kimberly Rogers",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-15",
    "type": "exam",
    "score": 50
  },
  {
    "id": 832,
    "student": "Kimberly Rogers",
    "subject": "Social Studies",
    "class": "2G",
    "teacher": "Charles Baker",
    "date": "2026-03-30",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 833,
    "student": "Sandra Hill",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 95
  },
  {
    "id": 834,
    "student": "Sandra Hill",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 835,
    "student": "Emily Gray",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 97
  },
  {
    "id": 836,
    "student": "Emily Gray",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 837,
    "student": "Anna Foster",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 65
  },
  {
    "id": 838,
    "student": "Anna Foster",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 839,
    "student": "Margaret Lee",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 66
  },
  {
    "id": 840,
    "student": "Margaret Lee",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 841,
    "student": "Ruth Carter",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 83
  },
  {
    "id": 842,
    "student": "Ruth Carter",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 843,
    "student": "Rachel Foster",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 64
  },
  {
    "id": 844,
    "student": "Rachel Foster",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 845,
    "student": "Elizabeth Gray",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 61
  },
  {
    "id": 846,
    "student": "Elizabeth Gray",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 847,
    "student": "Kimberly Rogers",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-03-23",
    "type": "exam",
    "score": 87
  },
  {
    "id": 848,
    "student": "Kimberly Rogers",
    "subject": "Urdu Language",
    "class": "2G",
    "teacher": "Jerry Bailey",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 849,
    "student": "Alexander Evans",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 96
  },
  {
    "id": 850,
    "student": "Alexander Evans",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 851,
    "student": "Matthew Henderson",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 97
  },
  {
    "id": 852,
    "student": "Matthew Henderson",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 853,
    "student": "Mark Wilson 2",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 95
  },
  {
    "id": 854,
    "student": "Mark Wilson 2",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 855,
    "student": "Anthony Collins",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 95
  },
  {
    "id": 856,
    "student": "Anthony Collins",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 857,
    "student": "Samuel Evans",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 67
  },
  {
    "id": 858,
    "student": "Samuel Evans",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 859,
    "student": "Joseph Butler",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 82
  },
  {
    "id": 860,
    "student": "Joseph Butler",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 861,
    "student": "Tyler Rogers",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 81
  },
  {
    "id": 862,
    "student": "Tyler Rogers",
    "subject": "Art & Design",
    "class": "3B",
    "teacher": "Angela Wilson",
    "date": "2026-01-20",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 863,
    "student": "Alexander Evans",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 78
  },
  {
    "id": 864,
    "student": "Alexander Evans",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 865,
    "student": "Matthew Henderson",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 54
  },
  {
    "id": 866,
    "student": "Matthew Henderson",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 867,
    "student": "Mark Wilson 2",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 85
  },
  {
    "id": 868,
    "student": "Mark Wilson 2",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 869,
    "student": "Anthony Collins",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 76
  },
  {
    "id": 870,
    "student": "Anthony Collins",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 871,
    "student": "Samuel Evans",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 70
  },
  {
    "id": 872,
    "student": "Samuel Evans",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 873,
    "student": "Joseph Butler",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 60
  },
  {
    "id": 874,
    "student": "Joseph Butler",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 875,
    "student": "Tyler Rogers",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-03-16",
    "type": "exam",
    "score": 63
  },
  {
    "id": 876,
    "student": "Tyler Rogers",
    "subject": "Computer Science",
    "class": "3B",
    "teacher": "Rachel Henderson",
    "date": "2026-05-13",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 877,
    "student": "Alexander Evans",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 71
  },
  {
    "id": 878,
    "student": "Alexander Evans",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 879,
    "student": "Matthew Henderson",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 99
  },
  {
    "id": 880,
    "student": "Matthew Henderson",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 881,
    "student": "Mark Wilson 2",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 65
  },
  {
    "id": 882,
    "student": "Mark Wilson 2",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 883,
    "student": "Anthony Collins",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 64
  },
  {
    "id": 884,
    "student": "Anthony Collins",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 885,
    "student": "Samuel Evans",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 76
  },
  {
    "id": 886,
    "student": "Samuel Evans",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 887,
    "student": "Joseph Butler",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 89
  },
  {
    "id": 888,
    "student": "Joseph Butler",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 889,
    "student": "Tyler Rogers",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-03-22",
    "type": "exam",
    "score": 69
  },
  {
    "id": 890,
    "student": "Tyler Rogers",
    "subject": "English Language",
    "class": "3B",
    "teacher": "Raymond Jackson",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 891,
    "student": "Alexander Evans",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 60
  },
  {
    "id": 892,
    "student": "Alexander Evans",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 893,
    "student": "Matthew Henderson",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 63
  },
  {
    "id": 894,
    "student": "Matthew Henderson",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 895,
    "student": "Mark Wilson 2",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 55
  },
  {
    "id": 896,
    "student": "Mark Wilson 2",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 897,
    "student": "Anthony Collins",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 62
  },
  {
    "id": 898,
    "student": "Anthony Collins",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 899,
    "student": "Samuel Evans",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 70
  },
  {
    "id": 900,
    "student": "Samuel Evans",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 901,
    "student": "Joseph Butler",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 82
  },
  {
    "id": 902,
    "student": "Joseph Butler",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 903,
    "student": "Tyler Rogers",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-06",
    "type": "exam",
    "score": 61
  },
  {
    "id": 904,
    "student": "Tyler Rogers",
    "subject": "General Science",
    "class": "3B",
    "teacher": "Jerry Bennett",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 905,
    "student": "Alexander Evans",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 80
  },
  {
    "id": 906,
    "student": "Alexander Evans",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 907,
    "student": "Matthew Henderson",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 99
  },
  {
    "id": 908,
    "student": "Matthew Henderson",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 909,
    "student": "Mark Wilson 2",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 81
  },
  {
    "id": 910,
    "student": "Mark Wilson 2",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 911,
    "student": "Anthony Collins",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 67
  },
  {
    "id": 912,
    "student": "Anthony Collins",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 913,
    "student": "Samuel Evans",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 83
  },
  {
    "id": 914,
    "student": "Samuel Evans",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 915,
    "student": "Joseph Butler",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 80
  },
  {
    "id": 916,
    "student": "Joseph Butler",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 917,
    "student": "Tyler Rogers",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-03-11",
    "type": "exam",
    "score": 82
  },
  {
    "id": 918,
    "student": "Tyler Rogers",
    "subject": "Islamic Studies",
    "class": "3B",
    "teacher": "Catherine Hall",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 919,
    "student": "Alexander Evans",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 82
  },
  {
    "id": 920,
    "student": "Alexander Evans",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 921,
    "student": "Matthew Henderson",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 64
  },
  {
    "id": 922,
    "student": "Matthew Henderson",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 923,
    "student": "Mark Wilson 2",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 72
  },
  {
    "id": 924,
    "student": "Mark Wilson 2",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 925,
    "student": "Anthony Collins",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 74
  },
  {
    "id": 926,
    "student": "Anthony Collins",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 927,
    "student": "Samuel Evans",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 75
  },
  {
    "id": 928,
    "student": "Samuel Evans",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 929,
    "student": "Joseph Butler",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 72
  },
  {
    "id": 930,
    "student": "Joseph Butler",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 931,
    "student": "Tyler Rogers",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-03-03",
    "type": "exam",
    "score": 77
  },
  {
    "id": 932,
    "student": "Tyler Rogers",
    "subject": "Mathematics",
    "class": "3B",
    "teacher": "Jerry Butler",
    "date": "2026-05-05",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 933,
    "student": "Alexander Evans",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 72
  },
  {
    "id": 934,
    "student": "Alexander Evans",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 935,
    "student": "Matthew Henderson",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 94
  },
  {
    "id": 936,
    "student": "Matthew Henderson",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 937,
    "student": "Mark Wilson 2",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 91
  },
  {
    "id": 938,
    "student": "Mark Wilson 2",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 939,
    "student": "Anthony Collins",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 79
  },
  {
    "id": 940,
    "student": "Anthony Collins",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 941,
    "student": "Samuel Evans",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 85
  },
  {
    "id": 942,
    "student": "Samuel Evans",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 943,
    "student": "Joseph Butler",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 52
  },
  {
    "id": 944,
    "student": "Joseph Butler",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 945,
    "student": "Tyler Rogers",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 96
  },
  {
    "id": 946,
    "student": "Tyler Rogers",
    "subject": "Physical Education",
    "class": "3B",
    "teacher": "Karen Watson",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 947,
    "student": "Alexander Evans",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 72
  },
  {
    "id": 948,
    "student": "Alexander Evans",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 949,
    "student": "Matthew Henderson",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 90
  },
  {
    "id": 950,
    "student": "Matthew Henderson",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 951,
    "student": "Mark Wilson 2",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 93
  },
  {
    "id": 952,
    "student": "Mark Wilson 2",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 953,
    "student": "Anthony Collins",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 77
  },
  {
    "id": 954,
    "student": "Anthony Collins",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 955,
    "student": "Samuel Evans",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 69
  },
  {
    "id": 956,
    "student": "Samuel Evans",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 957,
    "student": "Joseph Butler",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 85
  },
  {
    "id": 958,
    "student": "Joseph Butler",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 959,
    "student": "Tyler Rogers",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-04-10",
    "type": "exam",
    "score": 92
  },
  {
    "id": 960,
    "student": "Tyler Rogers",
    "subject": "Social Studies",
    "class": "3B",
    "teacher": "Charles Baker",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 961,
    "student": "Alexander Evans",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 97
  },
  {
    "id": 962,
    "student": "Alexander Evans",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 963,
    "student": "Matthew Henderson",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 93
  },
  {
    "id": 964,
    "student": "Matthew Henderson",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 965,
    "student": "Mark Wilson 2",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 90
  },
  {
    "id": 966,
    "student": "Mark Wilson 2",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 967,
    "student": "Anthony Collins",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 93
  },
  {
    "id": 968,
    "student": "Anthony Collins",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 969,
    "student": "Samuel Evans",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 100
  },
  {
    "id": 970,
    "student": "Samuel Evans",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 971,
    "student": "Joseph Butler",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 87
  },
  {
    "id": 972,
    "student": "Joseph Butler",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 973,
    "student": "Tyler Rogers",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-03-24",
    "type": "exam",
    "score": 93
  },
  {
    "id": 974,
    "student": "Tyler Rogers",
    "subject": "Urdu Language",
    "class": "3B",
    "teacher": "Jerry Bailey",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 975,
    "student": "Patricia Collins",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 71
  },
  {
    "id": 976,
    "student": "Patricia Collins",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 977,
    "student": "Catherine Watson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 85
  },
  {
    "id": 978,
    "student": "Catherine Watson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 979,
    "student": "Kimberly Perry",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 75
  },
  {
    "id": 980,
    "student": "Kimberly Perry",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 981,
    "student": "Jessica Anderson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 61
  },
  {
    "id": 982,
    "student": "Jessica Anderson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 983,
    "student": "Cynthia Nelson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 57
  },
  {
    "id": 984,
    "student": "Cynthia Nelson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 985,
    "student": "Nancy Moore",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 51
  },
  {
    "id": 986,
    "student": "Nancy Moore",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 987,
    "student": "Betty Anderson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 70
  },
  {
    "id": 988,
    "student": "Betty Anderson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 989,
    "student": "Stephanie Anderson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 78
  },
  {
    "id": 990,
    "student": "Stephanie Anderson",
    "subject": "Art & Design",
    "class": "3G",
    "teacher": "Kimberly Ross",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 991,
    "student": "Patricia Collins",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 67
  },
  {
    "id": 992,
    "student": "Patricia Collins",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 993,
    "student": "Catherine Watson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 83
  },
  {
    "id": 994,
    "student": "Catherine Watson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 995,
    "student": "Kimberly Perry",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 72
  },
  {
    "id": 996,
    "student": "Kimberly Perry",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 997,
    "student": "Jessica Anderson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 84
  },
  {
    "id": 998,
    "student": "Jessica Anderson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 999,
    "student": "Cynthia Nelson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1000,
    "student": "Cynthia Nelson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1001,
    "student": "Nancy Moore",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1002,
    "student": "Nancy Moore",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1003,
    "student": "Betty Anderson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1004,
    "student": "Betty Anderson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1005,
    "student": "Stephanie Anderson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-03-30",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1006,
    "student": "Stephanie Anderson",
    "subject": "Computer Science",
    "class": "3G",
    "teacher": "Rachel Henderson",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 1007,
    "student": "Patricia Collins",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1008,
    "student": "Patricia Collins",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1009,
    "student": "Catherine Watson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1010,
    "student": "Catherine Watson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1011,
    "student": "Kimberly Perry",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 51
  },
  {
    "id": 1012,
    "student": "Kimberly Perry",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1013,
    "student": "Jessica Anderson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1014,
    "student": "Jessica Anderson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1015,
    "student": "Cynthia Nelson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1016,
    "student": "Cynthia Nelson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1017,
    "student": "Nancy Moore",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1018,
    "student": "Nancy Moore",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1019,
    "student": "Betty Anderson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1020,
    "student": "Betty Anderson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1021,
    "student": "Stephanie Anderson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-14",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1022,
    "student": "Stephanie Anderson",
    "subject": "English Language",
    "class": "3G",
    "teacher": "Michael Ross",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1023,
    "student": "Patricia Collins",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1024,
    "student": "Patricia Collins",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1025,
    "student": "Catherine Watson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1026,
    "student": "Catherine Watson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1027,
    "student": "Kimberly Perry",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1028,
    "student": "Kimberly Perry",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1029,
    "student": "Jessica Anderson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1030,
    "student": "Jessica Anderson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1031,
    "student": "Cynthia Nelson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1032,
    "student": "Cynthia Nelson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1033,
    "student": "Nancy Moore",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1034,
    "student": "Nancy Moore",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1035,
    "student": "Betty Anderson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1036,
    "student": "Betty Anderson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1037,
    "student": "Stephanie Anderson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-03-04",
    "type": "exam",
    "score": 53
  },
  {
    "id": 1038,
    "student": "Stephanie Anderson",
    "subject": "General Science",
    "class": "3G",
    "teacher": "Sandra Cox",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1039,
    "student": "Patricia Collins",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1040,
    "student": "Patricia Collins",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1041,
    "student": "Catherine Watson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1042,
    "student": "Catherine Watson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1043,
    "student": "Kimberly Perry",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1044,
    "student": "Kimberly Perry",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1045,
    "student": "Jessica Anderson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1046,
    "student": "Jessica Anderson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1047,
    "student": "Cynthia Nelson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1048,
    "student": "Cynthia Nelson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 1049,
    "student": "Nancy Moore",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1050,
    "student": "Nancy Moore",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1051,
    "student": "Betty Anderson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1052,
    "student": "Betty Anderson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1053,
    "student": "Stephanie Anderson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-04-12",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1054,
    "student": "Stephanie Anderson",
    "subject": "Islamic Studies",
    "class": "3G",
    "teacher": "Raymond Cruz",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1055,
    "student": "Patricia Collins",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1056,
    "student": "Patricia Collins",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1057,
    "student": "Catherine Watson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1058,
    "student": "Catherine Watson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1059,
    "student": "Kimberly Perry",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1060,
    "student": "Kimberly Perry",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1061,
    "student": "Jessica Anderson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1062,
    "student": "Jessica Anderson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1063,
    "student": "Cynthia Nelson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1064,
    "student": "Cynthia Nelson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1065,
    "student": "Nancy Moore",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1066,
    "student": "Nancy Moore",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1067,
    "student": "Betty Anderson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1068,
    "student": "Betty Anderson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1069,
    "student": "Stephanie Anderson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-03-16",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1070,
    "student": "Stephanie Anderson",
    "subject": "Mathematics",
    "class": "3G",
    "teacher": "Timothy Diaz",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1071,
    "student": "Patricia Collins",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1072,
    "student": "Patricia Collins",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1073,
    "student": "Catherine Watson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1074,
    "student": "Catherine Watson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1075,
    "student": "Kimberly Perry",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1076,
    "student": "Kimberly Perry",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1077,
    "student": "Jessica Anderson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1078,
    "student": "Jessica Anderson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1079,
    "student": "Cynthia Nelson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1080,
    "student": "Cynthia Nelson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1081,
    "student": "Nancy Moore",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1082,
    "student": "Nancy Moore",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1083,
    "student": "Betty Anderson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1084,
    "student": "Betty Anderson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1085,
    "student": "Stephanie Anderson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-03-27",
    "type": "exam",
    "score": 72
  },
  {
    "id": 1086,
    "student": "Stephanie Anderson",
    "subject": "Physical Education",
    "class": "3G",
    "teacher": "Karen Watson",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1087,
    "student": "Patricia Collins",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1088,
    "student": "Patricia Collins",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1089,
    "student": "Catherine Watson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1090,
    "student": "Catherine Watson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1091,
    "student": "Kimberly Perry",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1092,
    "student": "Kimberly Perry",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1093,
    "student": "Jessica Anderson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1094,
    "student": "Jessica Anderson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1095,
    "student": "Cynthia Nelson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1096,
    "student": "Cynthia Nelson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1097,
    "student": "Nancy Moore",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1098,
    "student": "Nancy Moore",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1099,
    "student": "Betty Anderson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1100,
    "student": "Betty Anderson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1101,
    "student": "Stephanie Anderson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-03",
    "type": "exam",
    "score": 61
  },
  {
    "id": 1102,
    "student": "Stephanie Anderson",
    "subject": "Social Studies",
    "class": "3G",
    "teacher": "Barbara Lee",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1103,
    "student": "Patricia Collins",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 61
  },
  {
    "id": 1104,
    "student": "Patricia Collins",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1105,
    "student": "Catherine Watson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1106,
    "student": "Catherine Watson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1107,
    "student": "Kimberly Perry",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1108,
    "student": "Kimberly Perry",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1109,
    "student": "Jessica Anderson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1110,
    "student": "Jessica Anderson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1111,
    "student": "Cynthia Nelson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1112,
    "student": "Cynthia Nelson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 1113,
    "student": "Nancy Moore",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1114,
    "student": "Nancy Moore",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1115,
    "student": "Betty Anderson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1116,
    "student": "Betty Anderson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1117,
    "student": "Stephanie Anderson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-04-10",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1118,
    "student": "Stephanie Anderson",
    "subject": "Urdu Language",
    "class": "3G",
    "teacher": "Mary Butler",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1119,
    "student": "Benjamin Hall",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1120,
    "student": "Benjamin Hall",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1121,
    "student": "Jason Cox",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1122,
    "student": "Jason Cox",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1123,
    "student": "Mark Wilson",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1124,
    "student": "Mark Wilson",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1125,
    "student": "Gary Sullivan",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1126,
    "student": "Gary Sullivan",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1127,
    "student": "Andrew Evans",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1128,
    "student": "Andrew Evans",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1129,
    "student": "Samuel Wright",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 75
  },
  {
    "id": 1130,
    "student": "Samuel Wright",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1131,
    "student": "Andrew Wright",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1132,
    "student": "Andrew Wright",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1133,
    "student": "William Jackson",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-04-11",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1134,
    "student": "William Jackson",
    "subject": "Computer Science",
    "class": "4B",
    "teacher": "Carolyn Reed",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1135,
    "student": "Benjamin Hall",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 83
  },
  {
    "id": 1136,
    "student": "Benjamin Hall",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1137,
    "student": "Jason Cox",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1138,
    "student": "Jason Cox",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1139,
    "student": "Mark Wilson",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1140,
    "student": "Mark Wilson",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1141,
    "student": "Gary Sullivan",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1142,
    "student": "Gary Sullivan",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1143,
    "student": "Andrew Evans",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1144,
    "student": "Andrew Evans",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1145,
    "student": "Samuel Wright",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1146,
    "student": "Samuel Wright",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1147,
    "student": "Andrew Wright",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1148,
    "student": "Andrew Wright",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1149,
    "student": "William Jackson",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1150,
    "student": "William Jackson",
    "subject": "English Language",
    "class": "4B",
    "teacher": "Jason Watson",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1151,
    "student": "Benjamin Hall",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1152,
    "student": "Benjamin Hall",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1153,
    "student": "Jason Cox",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1154,
    "student": "Jason Cox",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1155,
    "student": "Mark Wilson",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 86
  },
  {
    "id": 1156,
    "student": "Mark Wilson",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1157,
    "student": "Gary Sullivan",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1158,
    "student": "Gary Sullivan",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1159,
    "student": "Andrew Evans",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1160,
    "student": "Andrew Evans",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1161,
    "student": "Samuel Wright",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1162,
    "student": "Samuel Wright",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1163,
    "student": "Andrew Wright",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1164,
    "student": "Andrew Wright",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1165,
    "student": "William Jackson",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-03-01",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1166,
    "student": "William Jackson",
    "subject": "General Science",
    "class": "4B",
    "teacher": "Charles Moore",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1167,
    "student": "Benjamin Hall",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1168,
    "student": "Benjamin Hall",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1169,
    "student": "Jason Cox",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1170,
    "student": "Jason Cox",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1171,
    "student": "Mark Wilson",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1172,
    "student": "Mark Wilson",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1173,
    "student": "Gary Sullivan",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1174,
    "student": "Gary Sullivan",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1175,
    "student": "Andrew Evans",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1176,
    "student": "Andrew Evans",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1177,
    "student": "Samuel Wright",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1178,
    "student": "Samuel Wright",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1179,
    "student": "Andrew Wright",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1180,
    "student": "Andrew Wright",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1181,
    "student": "William Jackson",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-17",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1182,
    "student": "William Jackson",
    "subject": "Geography",
    "class": "4B",
    "teacher": "Richard Morgan",
    "date": "2026-03-16",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1183,
    "student": "Benjamin Hall",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1184,
    "student": "Benjamin Hall",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1185,
    "student": "Jason Cox",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1186,
    "student": "Jason Cox",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1187,
    "student": "Mark Wilson",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1188,
    "student": "Mark Wilson",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1189,
    "student": "Gary Sullivan",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1190,
    "student": "Gary Sullivan",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1191,
    "student": "Andrew Evans",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1192,
    "student": "Andrew Evans",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1193,
    "student": "Samuel Wright",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1194,
    "student": "Samuel Wright",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1195,
    "student": "Andrew Wright",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1196,
    "student": "Andrew Wright",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1197,
    "student": "William Jackson",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-04-15",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1198,
    "student": "William Jackson",
    "subject": "Islamic Studies",
    "class": "4B",
    "teacher": "Scott Evans",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1199,
    "student": "Benjamin Hall",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1200,
    "student": "Benjamin Hall",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1201,
    "student": "Jason Cox",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1202,
    "student": "Jason Cox",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1203,
    "student": "Mark Wilson",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1204,
    "student": "Mark Wilson",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1205,
    "student": "Gary Sullivan",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1206,
    "student": "Gary Sullivan",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1207,
    "student": "Andrew Evans",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1208,
    "student": "Andrew Evans",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 1209,
    "student": "Samuel Wright",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1210,
    "student": "Samuel Wright",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1211,
    "student": "Andrew Wright",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1212,
    "student": "Andrew Wright",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1213,
    "student": "William Jackson",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1214,
    "student": "William Jackson",
    "subject": "Mathematics",
    "class": "4B",
    "teacher": "Melissa King",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1215,
    "student": "Benjamin Hall",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1216,
    "student": "Benjamin Hall",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1217,
    "student": "Jason Cox",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1218,
    "student": "Jason Cox",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1219,
    "student": "Mark Wilson",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1220,
    "student": "Mark Wilson",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1221,
    "student": "Gary Sullivan",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1222,
    "student": "Gary Sullivan",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1223,
    "student": "Andrew Evans",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1224,
    "student": "Andrew Evans",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1225,
    "student": "Samuel Wright",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1226,
    "student": "Samuel Wright",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1227,
    "student": "Andrew Wright",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1228,
    "student": "Andrew Wright",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1229,
    "student": "William Jackson",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1230,
    "student": "William Jackson",
    "subject": "Pakistan Studies",
    "class": "4B",
    "teacher": "Stephanie Thompson",
    "date": "2026-04-08",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1231,
    "student": "Benjamin Hall",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1232,
    "student": "Benjamin Hall",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1233,
    "student": "Jason Cox",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1234,
    "student": "Jason Cox",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1235,
    "student": "Mark Wilson",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1236,
    "student": "Mark Wilson",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1237,
    "student": "Gary Sullivan",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1238,
    "student": "Gary Sullivan",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1239,
    "student": "Andrew Evans",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 83
  },
  {
    "id": 1240,
    "student": "Andrew Evans",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1241,
    "student": "Samuel Wright",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1242,
    "student": "Samuel Wright",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1243,
    "student": "Andrew Wright",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1244,
    "student": "Andrew Wright",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1245,
    "student": "William Jackson",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-04-13",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1246,
    "student": "William Jackson",
    "subject": "Physical Education",
    "class": "4B",
    "teacher": "George Barnes",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1247,
    "student": "Benjamin Hall",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1248,
    "student": "Benjamin Hall",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1249,
    "student": "Jason Cox",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1250,
    "student": "Jason Cox",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1251,
    "student": "Mark Wilson",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1252,
    "student": "Mark Wilson",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1253,
    "student": "Gary Sullivan",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1254,
    "student": "Gary Sullivan",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1255,
    "student": "Andrew Evans",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1256,
    "student": "Andrew Evans",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1257,
    "student": "Samuel Wright",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1258,
    "student": "Samuel Wright",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1259,
    "student": "Andrew Wright",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1260,
    "student": "Andrew Wright",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1261,
    "student": "William Jackson",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-04-14",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1262,
    "student": "William Jackson",
    "subject": "Social Studies",
    "class": "4B",
    "teacher": "Angela Rogers",
    "date": "2026-05-21",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1263,
    "student": "Benjamin Hall",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1264,
    "student": "Benjamin Hall",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1265,
    "student": "Jason Cox",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1266,
    "student": "Jason Cox",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1267,
    "student": "Mark Wilson",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1268,
    "student": "Mark Wilson",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1269,
    "student": "Gary Sullivan",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1270,
    "student": "Gary Sullivan",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1271,
    "student": "Andrew Evans",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1272,
    "student": "Andrew Evans",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1273,
    "student": "Samuel Wright",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1274,
    "student": "Samuel Wright",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1275,
    "student": "Andrew Wright",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 51
  },
  {
    "id": 1276,
    "student": "Andrew Wright",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1277,
    "student": "William Jackson",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-03-19",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1278,
    "student": "William Jackson",
    "subject": "Urdu Language",
    "class": "4B",
    "teacher": "Shirley Butler",
    "date": "2026-04-26",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1279,
    "student": "Angela Collins",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1280,
    "student": "Angela Collins",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1281,
    "student": "Margaret Collins",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1282,
    "student": "Margaret Collins",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1283,
    "student": "Samantha Baker 2",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1284,
    "student": "Samantha Baker 2",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1285,
    "student": "Shirley Thompson",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1286,
    "student": "Shirley Thompson",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1287,
    "student": "Samantha Nelson",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1288,
    "student": "Samantha Nelson",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1289,
    "student": "Christine Jackson",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1290,
    "student": "Christine Jackson",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1291,
    "student": "Amy Hall",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-03-26",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1292,
    "student": "Amy Hall",
    "subject": "Computer Science",
    "class": "4G",
    "teacher": "Sandra Lee",
    "date": "2026-02-20",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1293,
    "student": "Angela Collins",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1294,
    "student": "Angela Collins",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1295,
    "student": "Margaret Collins",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1296,
    "student": "Margaret Collins",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1297,
    "student": "Samantha Baker 2",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1298,
    "student": "Samantha Baker 2",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1299,
    "student": "Shirley Thompson",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1300,
    "student": "Shirley Thompson",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1301,
    "student": "Samantha Nelson",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1302,
    "student": "Samantha Nelson",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1303,
    "student": "Christine Jackson",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1304,
    "student": "Christine Jackson",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1305,
    "student": "Amy Hall",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-03-22",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1306,
    "student": "Amy Hall",
    "subject": "English Language",
    "class": "4G",
    "teacher": "Jerry Foster",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1307,
    "student": "Angela Collins",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1308,
    "student": "Angela Collins",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1309,
    "student": "Margaret Collins",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1310,
    "student": "Margaret Collins",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1311,
    "student": "Samantha Baker 2",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1312,
    "student": "Samantha Baker 2",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1313,
    "student": "Shirley Thompson",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1314,
    "student": "Shirley Thompson",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1315,
    "student": "Samantha Nelson",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1316,
    "student": "Samantha Nelson",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1317,
    "student": "Christine Jackson",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1318,
    "student": "Christine Jackson",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 1319,
    "student": "Amy Hall",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1320,
    "student": "Amy Hall",
    "subject": "General Science",
    "class": "4G",
    "teacher": "Justin Evans",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1321,
    "student": "Angela Collins",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1322,
    "student": "Angela Collins",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1323,
    "student": "Margaret Collins",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1324,
    "student": "Margaret Collins",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1325,
    "student": "Samantha Baker 2",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1326,
    "student": "Samantha Baker 2",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1327,
    "student": "Shirley Thompson",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1328,
    "student": "Shirley Thompson",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1329,
    "student": "Samantha Nelson",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1330,
    "student": "Samantha Nelson",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1331,
    "student": "Christine Jackson",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1332,
    "student": "Christine Jackson",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1333,
    "student": "Amy Hall",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-04-14",
    "type": "exam",
    "score": 83
  },
  {
    "id": 1334,
    "student": "Amy Hall",
    "subject": "Geography",
    "class": "4G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1335,
    "student": "Angela Collins",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1336,
    "student": "Angela Collins",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1337,
    "student": "Margaret Collins",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 83
  },
  {
    "id": 1338,
    "student": "Margaret Collins",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1339,
    "student": "Samantha Baker 2",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1340,
    "student": "Samantha Baker 2",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1341,
    "student": "Shirley Thompson",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1342,
    "student": "Shirley Thompson",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1343,
    "student": "Samantha Nelson",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1344,
    "student": "Samantha Nelson",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1345,
    "student": "Christine Jackson",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1346,
    "student": "Christine Jackson",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1347,
    "student": "Amy Hall",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-03-14",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1348,
    "student": "Amy Hall",
    "subject": "Islamic Studies",
    "class": "4G",
    "teacher": "Linda Moore",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1349,
    "student": "Angela Collins",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 86
  },
  {
    "id": 1350,
    "student": "Angela Collins",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1351,
    "student": "Margaret Collins",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1352,
    "student": "Margaret Collins",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1353,
    "student": "Samantha Baker 2",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1354,
    "student": "Samantha Baker 2",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1355,
    "student": "Shirley Thompson",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1356,
    "student": "Shirley Thompson",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1357,
    "student": "Samantha Nelson",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1358,
    "student": "Samantha Nelson",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1359,
    "student": "Christine Jackson",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1360,
    "student": "Christine Jackson",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1361,
    "student": "Amy Hall",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-03-17",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1362,
    "student": "Amy Hall",
    "subject": "Mathematics",
    "class": "4G",
    "teacher": "Brian Collins",
    "date": "2026-04-09",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1363,
    "student": "Angela Collins",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1364,
    "student": "Angela Collins",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1365,
    "student": "Margaret Collins",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1366,
    "student": "Margaret Collins",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1367,
    "student": "Samantha Baker 2",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1368,
    "student": "Samantha Baker 2",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1369,
    "student": "Shirley Thompson",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 86
  },
  {
    "id": 1370,
    "student": "Shirley Thompson",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1371,
    "student": "Samantha Nelson",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 61
  },
  {
    "id": 1372,
    "student": "Samantha Nelson",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1373,
    "student": "Christine Jackson",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1374,
    "student": "Christine Jackson",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1375,
    "student": "Amy Hall",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-11",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1376,
    "student": "Amy Hall",
    "subject": "Pakistan Studies",
    "class": "4G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1377,
    "student": "Angela Collins",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1378,
    "student": "Angela Collins",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1379,
    "student": "Margaret Collins",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1380,
    "student": "Margaret Collins",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 1381,
    "student": "Samantha Baker 2",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1382,
    "student": "Samantha Baker 2",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1383,
    "student": "Shirley Thompson",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 86
  },
  {
    "id": 1384,
    "student": "Shirley Thompson",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 1385,
    "student": "Samantha Nelson",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1386,
    "student": "Samantha Nelson",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1387,
    "student": "Christine Jackson",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1388,
    "student": "Christine Jackson",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1389,
    "student": "Amy Hall",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1390,
    "student": "Amy Hall",
    "subject": "Physical Education",
    "class": "4G",
    "teacher": "Scott Rogers",
    "date": "2026-02-07",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1391,
    "student": "Angela Collins",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1392,
    "student": "Angela Collins",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1393,
    "student": "Margaret Collins",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1394,
    "student": "Margaret Collins",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1395,
    "student": "Samantha Baker 2",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1396,
    "student": "Samantha Baker 2",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1397,
    "student": "Shirley Thompson",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1398,
    "student": "Shirley Thompson",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1399,
    "student": "Samantha Nelson",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1400,
    "student": "Samantha Nelson",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1401,
    "student": "Christine Jackson",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1402,
    "student": "Christine Jackson",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1403,
    "student": "Amy Hall",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-04-11",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1404,
    "student": "Amy Hall",
    "subject": "Social Studies",
    "class": "4G",
    "teacher": "Maria Diaz",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1405,
    "student": "Angela Collins",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1406,
    "student": "Angela Collins",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1407,
    "student": "Margaret Collins",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1408,
    "student": "Margaret Collins",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1409,
    "student": "Samantha Baker 2",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1410,
    "student": "Samantha Baker 2",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1411,
    "student": "Shirley Thompson",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1412,
    "student": "Shirley Thompson",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1413,
    "student": "Samantha Nelson",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1414,
    "student": "Samantha Nelson",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1415,
    "student": "Christine Jackson",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1416,
    "student": "Christine Jackson",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1417,
    "student": "Amy Hall",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-08",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1418,
    "student": "Amy Hall",
    "subject": "Urdu Language",
    "class": "4G",
    "teacher": "Joseph Henderson",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1419,
    "student": "Aaron Collins",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1420,
    "student": "Aaron Collins",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1421,
    "student": "Jacob Hill",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1422,
    "student": "Jacob Hill",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1423,
    "student": "Christopher Watson",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1424,
    "student": "Christopher Watson",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1425,
    "student": "Kevin Barnes",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1426,
    "student": "Kevin Barnes",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1427,
    "student": "William Wright",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1428,
    "student": "William Wright",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1429,
    "student": "Mark Anderson",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1430,
    "student": "Mark Anderson",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1431,
    "student": "Raymond Morgan",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1432,
    "student": "Raymond Morgan",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1433,
    "student": "Ryan Fisher",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-04-14",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1434,
    "student": "Ryan Fisher",
    "subject": "Computer Science",
    "class": "5B",
    "teacher": "Paul Wilson",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1435,
    "student": "Aaron Collins",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 86
  },
  {
    "id": 1436,
    "student": "Aaron Collins",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1437,
    "student": "Jacob Hill",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1438,
    "student": "Jacob Hill",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1439,
    "student": "Christopher Watson",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1440,
    "student": "Christopher Watson",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1441,
    "student": "Kevin Barnes",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1442,
    "student": "Kevin Barnes",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1443,
    "student": "William Wright",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1444,
    "student": "William Wright",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1445,
    "student": "Mark Anderson",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1446,
    "student": "Mark Anderson",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1447,
    "student": "Raymond Morgan",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1448,
    "student": "Raymond Morgan",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1449,
    "student": "Ryan Fisher",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-03-20",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1450,
    "student": "Ryan Fisher",
    "subject": "English Language",
    "class": "5B",
    "teacher": "Brian Morgan",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1451,
    "student": "Aaron Collins",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1452,
    "student": "Aaron Collins",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1453,
    "student": "Jacob Hill",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1454,
    "student": "Jacob Hill",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1455,
    "student": "Christopher Watson",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1456,
    "student": "Christopher Watson",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1457,
    "student": "Kevin Barnes",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1458,
    "student": "Kevin Barnes",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1459,
    "student": "William Wright",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1460,
    "student": "William Wright",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1461,
    "student": "Mark Anderson",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1462,
    "student": "Mark Anderson",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1463,
    "student": "Raymond Morgan",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1464,
    "student": "Raymond Morgan",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1465,
    "student": "Ryan Fisher",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-03-05",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1466,
    "student": "Ryan Fisher",
    "subject": "General Science",
    "class": "5B",
    "teacher": "Jennifer King",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1467,
    "student": "Aaron Collins",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1468,
    "student": "Aaron Collins",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1469,
    "student": "Jacob Hill",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1470,
    "student": "Jacob Hill",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1471,
    "student": "Christopher Watson",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1472,
    "student": "Christopher Watson",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1473,
    "student": "Kevin Barnes",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1474,
    "student": "Kevin Barnes",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1475,
    "student": "William Wright",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 51
  },
  {
    "id": 1476,
    "student": "William Wright",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1477,
    "student": "Mark Anderson",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 53
  },
  {
    "id": 1478,
    "student": "Mark Anderson",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1479,
    "student": "Raymond Morgan",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1480,
    "student": "Raymond Morgan",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1481,
    "student": "Ryan Fisher",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-05",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1482,
    "student": "Ryan Fisher",
    "subject": "Geography",
    "class": "5B",
    "teacher": "Kathleen Foster",
    "date": "2026-03-29",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1483,
    "student": "Aaron Collins",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1484,
    "student": "Aaron Collins",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1485,
    "student": "Jacob Hill",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1486,
    "student": "Jacob Hill",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1487,
    "student": "Christopher Watson",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1488,
    "student": "Christopher Watson",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1489,
    "student": "Kevin Barnes",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 72
  },
  {
    "id": 1490,
    "student": "Kevin Barnes",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1491,
    "student": "William Wright",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1492,
    "student": "William Wright",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1493,
    "student": "Mark Anderson",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1494,
    "student": "Mark Anderson",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1495,
    "student": "Raymond Morgan",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1496,
    "student": "Raymond Morgan",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1497,
    "student": "Ryan Fisher",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-03-01",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1498,
    "student": "Ryan Fisher",
    "subject": "Islamic Studies",
    "class": "5B",
    "teacher": "Anthony Ross",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1499,
    "student": "Aaron Collins",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1500,
    "student": "Aaron Collins",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1501,
    "student": "Jacob Hill",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1502,
    "student": "Jacob Hill",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1503,
    "student": "Christopher Watson",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1504,
    "student": "Christopher Watson",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1505,
    "student": "Kevin Barnes",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 86
  },
  {
    "id": 1506,
    "student": "Kevin Barnes",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1507,
    "student": "William Wright",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1508,
    "student": "William Wright",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1509,
    "student": "Mark Anderson",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1510,
    "student": "Mark Anderson",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1511,
    "student": "Raymond Morgan",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1512,
    "student": "Raymond Morgan",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1513,
    "student": "Ryan Fisher",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-03-24",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1514,
    "student": "Ryan Fisher",
    "subject": "Mathematics",
    "class": "5B",
    "teacher": "Christine Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1515,
    "student": "Aaron Collins",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1516,
    "student": "Aaron Collins",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1517,
    "student": "Jacob Hill",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1518,
    "student": "Jacob Hill",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1519,
    "student": "Christopher Watson",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1520,
    "student": "Christopher Watson",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1521,
    "student": "Kevin Barnes",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1522,
    "student": "Kevin Barnes",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1523,
    "student": "William Wright",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1524,
    "student": "William Wright",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1525,
    "student": "Mark Anderson",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1526,
    "student": "Mark Anderson",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 1527,
    "student": "Raymond Morgan",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1528,
    "student": "Raymond Morgan",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1529,
    "student": "Ryan Fisher",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-03-10",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1530,
    "student": "Ryan Fisher",
    "subject": "Pakistan Studies",
    "class": "5B",
    "teacher": "Amy Collins",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 1531,
    "student": "Aaron Collins",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1532,
    "student": "Aaron Collins",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1533,
    "student": "Jacob Hill",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1534,
    "student": "Jacob Hill",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1535,
    "student": "Christopher Watson",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1536,
    "student": "Christopher Watson",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1537,
    "student": "Kevin Barnes",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1538,
    "student": "Kevin Barnes",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1539,
    "student": "William Wright",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1540,
    "student": "William Wright",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1541,
    "student": "Mark Anderson",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1542,
    "student": "Mark Anderson",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1543,
    "student": "Raymond Morgan",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1544,
    "student": "Raymond Morgan",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1545,
    "student": "Ryan Fisher",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-03-08",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1546,
    "student": "Ryan Fisher",
    "subject": "Physical Education",
    "class": "5B",
    "teacher": "Thomas Watson",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1547,
    "student": "Aaron Collins",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1548,
    "student": "Aaron Collins",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1549,
    "student": "Jacob Hill",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1550,
    "student": "Jacob Hill",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1551,
    "student": "Christopher Watson",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1552,
    "student": "Christopher Watson",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1553,
    "student": "Kevin Barnes",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1554,
    "student": "Kevin Barnes",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1555,
    "student": "William Wright",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1556,
    "student": "William Wright",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1557,
    "student": "Mark Anderson",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1558,
    "student": "Mark Anderson",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1559,
    "student": "Raymond Morgan",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1560,
    "student": "Raymond Morgan",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1561,
    "student": "Ryan Fisher",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-01",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1562,
    "student": "Ryan Fisher",
    "subject": "Social Studies",
    "class": "5B",
    "teacher": "Anthony Fisher",
    "date": "2026-04-12",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1563,
    "student": "Aaron Collins",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1564,
    "student": "Aaron Collins",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1565,
    "student": "Jacob Hill",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1566,
    "student": "Jacob Hill",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1567,
    "student": "Christopher Watson",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1568,
    "student": "Christopher Watson",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1569,
    "student": "Kevin Barnes",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1570,
    "student": "Kevin Barnes",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1571,
    "student": "William Wright",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1572,
    "student": "William Wright",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1573,
    "student": "Mark Anderson",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1574,
    "student": "Mark Anderson",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1575,
    "student": "Raymond Morgan",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1576,
    "student": "Raymond Morgan",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1577,
    "student": "Ryan Fisher",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-02",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1578,
    "student": "Ryan Fisher",
    "subject": "Urdu Language",
    "class": "5B",
    "teacher": "Charles Barnes",
    "date": "2026-04-18",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1579,
    "student": "Samantha Collins",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1580,
    "student": "Samantha Collins",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1581,
    "student": "Debra Collins",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1582,
    "student": "Debra Collins",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1583,
    "student": "Rachel Evans",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1584,
    "student": "Rachel Evans",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1585,
    "student": "Melissa Hall",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 53
  },
  {
    "id": 1586,
    "student": "Melissa Hall",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1587,
    "student": "Elizabeth Moore",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1588,
    "student": "Elizabeth Moore",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1589,
    "student": "Dorothy Baker",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1590,
    "student": "Dorothy Baker",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1591,
    "student": "Rachel Bailey",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1592,
    "student": "Rachel Bailey",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 1593,
    "student": "Susan Jackson 2",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1594,
    "student": "Susan Jackson 2",
    "subject": "Computer Science",
    "class": "5G",
    "teacher": "Paul Wilson",
    "date": "2026-05-17",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1595,
    "student": "Samantha Collins",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1596,
    "student": "Samantha Collins",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1597,
    "student": "Debra Collins",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1598,
    "student": "Debra Collins",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1599,
    "student": "Rachel Evans",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1600,
    "student": "Rachel Evans",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1601,
    "student": "Melissa Hall",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1602,
    "student": "Melissa Hall",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1603,
    "student": "Elizabeth Moore",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1604,
    "student": "Elizabeth Moore",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1605,
    "student": "Dorothy Baker",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1606,
    "student": "Dorothy Baker",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 1607,
    "student": "Rachel Bailey",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1608,
    "student": "Rachel Bailey",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1609,
    "student": "Susan Jackson 2",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1610,
    "student": "Susan Jackson 2",
    "subject": "English Language",
    "class": "5G",
    "teacher": "Brian Morgan",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1611,
    "student": "Samantha Collins",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1612,
    "student": "Samantha Collins",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1613,
    "student": "Debra Collins",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1614,
    "student": "Debra Collins",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1615,
    "student": "Rachel Evans",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1616,
    "student": "Rachel Evans",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1617,
    "student": "Melissa Hall",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1618,
    "student": "Melissa Hall",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1619,
    "student": "Elizabeth Moore",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1620,
    "student": "Elizabeth Moore",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1621,
    "student": "Dorothy Baker",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1622,
    "student": "Dorothy Baker",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1623,
    "student": "Rachel Bailey",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1624,
    "student": "Rachel Bailey",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1625,
    "student": "Susan Jackson 2",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-03-07",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1626,
    "student": "Susan Jackson 2",
    "subject": "General Science",
    "class": "5G",
    "teacher": "Justin Evans",
    "date": "2026-02-21",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1627,
    "student": "Samantha Collins",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1628,
    "student": "Samantha Collins",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1629,
    "student": "Debra Collins",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1630,
    "student": "Debra Collins",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1631,
    "student": "Rachel Evans",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 75
  },
  {
    "id": 1632,
    "student": "Rachel Evans",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1633,
    "student": "Melissa Hall",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1634,
    "student": "Melissa Hall",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1635,
    "student": "Elizabeth Moore",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1636,
    "student": "Elizabeth Moore",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1637,
    "student": "Dorothy Baker",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1638,
    "student": "Dorothy Baker",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1639,
    "student": "Rachel Bailey",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 53
  },
  {
    "id": 1640,
    "student": "Rachel Bailey",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1641,
    "student": "Susan Jackson 2",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-20",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1642,
    "student": "Susan Jackson 2",
    "subject": "Geography",
    "class": "5G",
    "teacher": "Kathleen Foster",
    "date": "2026-03-11",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1643,
    "student": "Samantha Collins",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 90
  },
  {
    "id": 1644,
    "student": "Samantha Collins",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1645,
    "student": "Debra Collins",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1646,
    "student": "Debra Collins",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1647,
    "student": "Rachel Evans",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1648,
    "student": "Rachel Evans",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1649,
    "student": "Melissa Hall",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1650,
    "student": "Melissa Hall",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1651,
    "student": "Elizabeth Moore",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1652,
    "student": "Elizabeth Moore",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1653,
    "student": "Dorothy Baker",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1654,
    "student": "Dorothy Baker",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1655,
    "student": "Rachel Bailey",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1656,
    "student": "Rachel Bailey",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1657,
    "student": "Susan Jackson 2",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-03-27",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1658,
    "student": "Susan Jackson 2",
    "subject": "Islamic Studies",
    "class": "5G",
    "teacher": "Anthony Ross",
    "date": "2026-04-19",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1659,
    "student": "Samantha Collins",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1660,
    "student": "Samantha Collins",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1661,
    "student": "Debra Collins",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1662,
    "student": "Debra Collins",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 1663,
    "student": "Rachel Evans",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1664,
    "student": "Rachel Evans",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1665,
    "student": "Melissa Hall",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1666,
    "student": "Melissa Hall",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1667,
    "student": "Elizabeth Moore",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1668,
    "student": "Elizabeth Moore",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1669,
    "student": "Dorothy Baker",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1670,
    "student": "Dorothy Baker",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1671,
    "student": "Rachel Bailey",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1672,
    "student": "Rachel Bailey",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1673,
    "student": "Susan Jackson 2",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-04-14",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1674,
    "student": "Susan Jackson 2",
    "subject": "Mathematics",
    "class": "5G",
    "teacher": "Kathleen Cox",
    "date": "2026-02-11",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1675,
    "student": "Samantha Collins",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1676,
    "student": "Samantha Collins",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1677,
    "student": "Debra Collins",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1678,
    "student": "Debra Collins",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1679,
    "student": "Rachel Evans",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1680,
    "student": "Rachel Evans",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1681,
    "student": "Melissa Hall",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 53
  },
  {
    "id": 1682,
    "student": "Melissa Hall",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1683,
    "student": "Elizabeth Moore",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1684,
    "student": "Elizabeth Moore",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1685,
    "student": "Dorothy Baker",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1686,
    "student": "Dorothy Baker",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1687,
    "student": "Rachel Bailey",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1688,
    "student": "Rachel Bailey",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1689,
    "student": "Susan Jackson 2",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-03-29",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1690,
    "student": "Susan Jackson 2",
    "subject": "Pakistan Studies",
    "class": "5G",
    "teacher": "Amy Collins",
    "date": "2026-04-23",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1691,
    "student": "Samantha Collins",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1692,
    "student": "Samantha Collins",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1693,
    "student": "Debra Collins",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1694,
    "student": "Debra Collins",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1695,
    "student": "Rachel Evans",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1696,
    "student": "Rachel Evans",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1697,
    "student": "Melissa Hall",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1698,
    "student": "Melissa Hall",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1699,
    "student": "Elizabeth Moore",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1700,
    "student": "Elizabeth Moore",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1701,
    "student": "Dorothy Baker",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1702,
    "student": "Dorothy Baker",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1703,
    "student": "Rachel Bailey",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1704,
    "student": "Rachel Bailey",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1705,
    "student": "Susan Jackson 2",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-03-07",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1706,
    "student": "Susan Jackson 2",
    "subject": "Physical Education",
    "class": "5G",
    "teacher": "Thomas Watson",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1707,
    "student": "Samantha Collins",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1708,
    "student": "Samantha Collins",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1709,
    "student": "Debra Collins",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1710,
    "student": "Debra Collins",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1711,
    "student": "Rachel Evans",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1712,
    "student": "Rachel Evans",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1713,
    "student": "Melissa Hall",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1714,
    "student": "Melissa Hall",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1715,
    "student": "Elizabeth Moore",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1716,
    "student": "Elizabeth Moore",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1717,
    "student": "Dorothy Baker",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1718,
    "student": "Dorothy Baker",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1719,
    "student": "Rachel Bailey",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1720,
    "student": "Rachel Bailey",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1721,
    "student": "Susan Jackson 2",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-30",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1722,
    "student": "Susan Jackson 2",
    "subject": "Social Studies",
    "class": "5G",
    "teacher": "Anthony Fisher",
    "date": "2026-03-04",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1723,
    "student": "Samantha Collins",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1724,
    "student": "Samantha Collins",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1725,
    "student": "Debra Collins",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1726,
    "student": "Debra Collins",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1727,
    "student": "Rachel Evans",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1728,
    "student": "Rachel Evans",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1729,
    "student": "Melissa Hall",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1730,
    "student": "Melissa Hall",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1731,
    "student": "Elizabeth Moore",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1732,
    "student": "Elizabeth Moore",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1733,
    "student": "Dorothy Baker",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1734,
    "student": "Dorothy Baker",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 1735,
    "student": "Rachel Bailey",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1736,
    "student": "Rachel Bailey",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1737,
    "student": "Susan Jackson 2",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1738,
    "student": "Susan Jackson 2",
    "subject": "Urdu Language",
    "class": "5G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1739,
    "student": "Kevin Thompson",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1740,
    "student": "Kevin Thompson",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1741,
    "student": "Jason King",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14",
    "type": "exam",
    "score": 72
  },
  {
    "id": 1742,
    "student": "Jason King",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1743,
    "student": "Steven Fisher",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1744,
    "student": "Steven Fisher",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1745,
    "student": "Timothy Diaz 2",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1746,
    "student": "Timothy Diaz 2",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 1747,
    "student": "Richard Rogers",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1748,
    "student": "Richard Rogers",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1749,
    "student": "Mark Bailey",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-03-14",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1750,
    "student": "Mark Bailey",
    "subject": "Computer Science",
    "class": "6B",
    "teacher": "Sandra Lee",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1751,
    "student": "Kevin Thompson",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1752,
    "student": "Kevin Thompson",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 1753,
    "student": "Jason King",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1754,
    "student": "Jason King",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1755,
    "student": "Steven Fisher",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25",
    "type": "exam",
    "score": 92
  },
  {
    "id": 1756,
    "student": "Steven Fisher",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1757,
    "student": "Timothy Diaz 2",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25",
    "type": "exam",
    "score": 61
  },
  {
    "id": 1758,
    "student": "Timothy Diaz 2",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1759,
    "student": "Richard Rogers",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25",
    "type": "exam",
    "score": 84
  },
  {
    "id": 1760,
    "student": "Richard Rogers",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1761,
    "student": "Mark Bailey",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-03-25",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1762,
    "student": "Mark Bailey",
    "subject": "English Language",
    "class": "6B",
    "teacher": "Jerry Foster",
    "date": "2026-05-06",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1763,
    "student": "Kevin Thompson",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1764,
    "student": "Kevin Thompson",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1765,
    "student": "Jason King",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1766,
    "student": "Jason King",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1767,
    "student": "Steven Fisher",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1768,
    "student": "Steven Fisher",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1769,
    "student": "Timothy Diaz 2",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15",
    "type": "exam",
    "score": 83
  },
  {
    "id": 1770,
    "student": "Timothy Diaz 2",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1771,
    "student": "Richard Rogers",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1772,
    "student": "Richard Rogers",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1773,
    "student": "Mark Bailey",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-03-15",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1774,
    "student": "Mark Bailey",
    "subject": "General Science",
    "class": "6B",
    "teacher": "Charles Moore",
    "date": "2026-02-02",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1775,
    "student": "Kevin Thompson",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1776,
    "student": "Kevin Thompson",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 1777,
    "student": "Jason King",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1778,
    "student": "Jason King",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 1779,
    "student": "Steven Fisher",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14",
    "type": "exam",
    "score": 75
  },
  {
    "id": 1780,
    "student": "Steven Fisher",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1781,
    "student": "Timothy Diaz 2",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1782,
    "student": "Timothy Diaz 2",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1783,
    "student": "Richard Rogers",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1784,
    "student": "Richard Rogers",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1785,
    "student": "Mark Bailey",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-03-14",
    "type": "exam",
    "score": 96
  },
  {
    "id": 1786,
    "student": "Mark Bailey",
    "subject": "Geography",
    "class": "6B",
    "teacher": "Richard Morgan",
    "date": "2026-05-02",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1787,
    "student": "Kevin Thompson",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23",
    "type": "exam",
    "score": 63
  },
  {
    "id": 1788,
    "student": "Kevin Thompson",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1789,
    "student": "Jason King",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1790,
    "student": "Jason King",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1791,
    "student": "Steven Fisher",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1792,
    "student": "Steven Fisher",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1793,
    "student": "Timothy Diaz 2",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1794,
    "student": "Timothy Diaz 2",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1795,
    "student": "Richard Rogers",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1796,
    "student": "Richard Rogers",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1797,
    "student": "Mark Bailey",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-03-23",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1798,
    "student": "Mark Bailey",
    "subject": "Islamic Studies",
    "class": "6B",
    "teacher": "Linda Moore",
    "date": "2026-04-15",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1799,
    "student": "Kevin Thompson",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1800,
    "student": "Kevin Thompson",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1801,
    "student": "Jason King",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1802,
    "student": "Jason King",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1803,
    "student": "Steven Fisher",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1804,
    "student": "Steven Fisher",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1805,
    "student": "Timothy Diaz 2",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1806,
    "student": "Timothy Diaz 2",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 1807,
    "student": "Richard Rogers",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22",
    "type": "exam",
    "score": 66
  },
  {
    "id": 1808,
    "student": "Richard Rogers",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1809,
    "student": "Mark Bailey",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-03-22",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1810,
    "student": "Mark Bailey",
    "subject": "Mathematics",
    "class": "6B",
    "teacher": "Christine Rogers",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1811,
    "student": "Kevin Thompson",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 51
  },
  {
    "id": 1812,
    "student": "Kevin Thompson",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1813,
    "student": "Jason King",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 85
  },
  {
    "id": 1814,
    "student": "Jason King",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1815,
    "student": "Steven Fisher",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1816,
    "student": "Steven Fisher",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1817,
    "student": "Timothy Diaz 2",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1818,
    "student": "Timothy Diaz 2",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1819,
    "student": "Richard Rogers",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1820,
    "student": "Richard Rogers",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1821,
    "student": "Mark Bailey",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-04-09",
    "type": "exam",
    "score": 83
  },
  {
    "id": 1822,
    "student": "Mark Bailey",
    "subject": "Pakistan Studies",
    "class": "6B",
    "teacher": "Dennis Griffin",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1823,
    "student": "Kevin Thompson",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1824,
    "student": "Kevin Thompson",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1825,
    "student": "Jason King",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1826,
    "student": "Jason King",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1827,
    "student": "Steven Fisher",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1828,
    "student": "Steven Fisher",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1829,
    "student": "Timothy Diaz 2",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1830,
    "student": "Timothy Diaz 2",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 1831,
    "student": "Richard Rogers",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1832,
    "student": "Richard Rogers",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1833,
    "student": "Mark Bailey",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-03-13",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1834,
    "student": "Mark Bailey",
    "subject": "Physical Education",
    "class": "6B",
    "teacher": "Scott Rogers",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1835,
    "student": "Kevin Thompson",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 81
  },
  {
    "id": 1836,
    "student": "Kevin Thompson",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1837,
    "student": "Jason King",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1838,
    "student": "Jason King",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 1839,
    "student": "Steven Fisher",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1840,
    "student": "Steven Fisher",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 1841,
    "student": "Timothy Diaz 2",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1842,
    "student": "Timothy Diaz 2",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1843,
    "student": "Richard Rogers",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 58
  },
  {
    "id": 1844,
    "student": "Richard Rogers",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1845,
    "student": "Mark Bailey",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-03-06",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1846,
    "student": "Mark Bailey",
    "subject": "Social Studies",
    "class": "6B",
    "teacher": "Maria Diaz",
    "date": "2026-02-09",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1847,
    "student": "Kevin Thompson",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1848,
    "student": "Kevin Thompson",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1849,
    "student": "Jason King",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1850,
    "student": "Jason King",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1851,
    "student": "Steven Fisher",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12",
    "type": "exam",
    "score": 59
  },
  {
    "id": 1852,
    "student": "Steven Fisher",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 1853,
    "student": "Timothy Diaz 2",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12",
    "type": "exam",
    "score": 61
  },
  {
    "id": 1854,
    "student": "Timothy Diaz 2",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1855,
    "student": "Richard Rogers",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12",
    "type": "exam",
    "score": 60
  },
  {
    "id": 1856,
    "student": "Richard Rogers",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 1857,
    "student": "Mark Bailey",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-12",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1858,
    "student": "Mark Bailey",
    "subject": "Urdu Language",
    "class": "6B",
    "teacher": "Shirley Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1859,
    "student": "Patricia Anderson",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1860,
    "student": "Patricia Anderson",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1861,
    "student": "Mary Thompson",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1862,
    "student": "Mary Thompson",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1863,
    "student": "Ruth Carter 2",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 61
  },
  {
    "id": 1864,
    "student": "Ruth Carter 2",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 1865,
    "student": "Karen Jackson",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1866,
    "student": "Karen Jackson",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1867,
    "student": "Stephanie Barnes",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1868,
    "student": "Stephanie Barnes",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 1869,
    "student": "Heather Barnes",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1870,
    "student": "Heather Barnes",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1871,
    "student": "Melissa Hall 2",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1872,
    "student": "Melissa Hall 2",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1873,
    "student": "Karen Lee",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-04-07",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1874,
    "student": "Karen Lee",
    "subject": "Computer Science",
    "class": "6G",
    "teacher": "Carolyn Reed",
    "date": "2026-02-28",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1875,
    "student": "Patricia Anderson",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 67
  },
  {
    "id": 1876,
    "student": "Patricia Anderson",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1877,
    "student": "Mary Thompson",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1878,
    "student": "Mary Thompson",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1879,
    "student": "Ruth Carter 2",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 88
  },
  {
    "id": 1880,
    "student": "Ruth Carter 2",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1881,
    "student": "Karen Jackson",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 51
  },
  {
    "id": 1882,
    "student": "Karen Jackson",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 1883,
    "student": "Stephanie Barnes",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1884,
    "student": "Stephanie Barnes",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1885,
    "student": "Heather Barnes",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1886,
    "student": "Heather Barnes",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 1887,
    "student": "Melissa Hall 2",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1888,
    "student": "Melissa Hall 2",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 1889,
    "student": "Karen Lee",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-04-12",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1890,
    "student": "Karen Lee",
    "subject": "English Language",
    "class": "6G",
    "teacher": "Jerry Foster",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1891,
    "student": "Patricia Anderson",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1892,
    "student": "Patricia Anderson",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 1893,
    "student": "Mary Thompson",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 71
  },
  {
    "id": 1894,
    "student": "Mary Thompson",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 1895,
    "student": "Ruth Carter 2",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1896,
    "student": "Ruth Carter 2",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 1897,
    "student": "Karen Jackson",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1898,
    "student": "Karen Jackson",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1899,
    "student": "Stephanie Barnes",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1900,
    "student": "Stephanie Barnes",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1901,
    "student": "Heather Barnes",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 51
  },
  {
    "id": 1902,
    "student": "Heather Barnes",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1903,
    "student": "Melissa Hall 2",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 93
  },
  {
    "id": 1904,
    "student": "Melissa Hall 2",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1905,
    "student": "Karen Lee",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-03-12",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1906,
    "student": "Karen Lee",
    "subject": "General Science",
    "class": "6G",
    "teacher": "Jennifer King",
    "date": "2026-01-25",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1907,
    "student": "Patricia Anderson",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1908,
    "student": "Patricia Anderson",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 1909,
    "student": "Mary Thompson",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 62
  },
  {
    "id": 1910,
    "student": "Mary Thompson",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 1911,
    "student": "Ruth Carter 2",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1912,
    "student": "Ruth Carter 2",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1913,
    "student": "Karen Jackson",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1914,
    "student": "Karen Jackson",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 1915,
    "student": "Stephanie Barnes",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1916,
    "student": "Stephanie Barnes",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1917,
    "student": "Heather Barnes",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1918,
    "student": "Heather Barnes",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1919,
    "student": "Melissa Hall 2",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1920,
    "student": "Melissa Hall 2",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 1921,
    "student": "Karen Lee",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-10",
    "type": "exam",
    "score": 70
  },
  {
    "id": 1922,
    "student": "Karen Lee",
    "subject": "Geography",
    "class": "6G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 1923,
    "student": "Patricia Anderson",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1924,
    "student": "Patricia Anderson",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1925,
    "student": "Mary Thompson",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1926,
    "student": "Mary Thompson",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 1927,
    "student": "Ruth Carter 2",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1928,
    "student": "Ruth Carter 2",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 1929,
    "student": "Karen Jackson",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1930,
    "student": "Karen Jackson",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1931,
    "student": "Stephanie Barnes",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 78
  },
  {
    "id": 1932,
    "student": "Stephanie Barnes",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1933,
    "student": "Heather Barnes",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 76
  },
  {
    "id": 1934,
    "student": "Heather Barnes",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 1935,
    "student": "Melissa Hall 2",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 50
  },
  {
    "id": 1936,
    "student": "Melissa Hall 2",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 1937,
    "student": "Karen Lee",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-03-07",
    "type": "exam",
    "score": 57
  },
  {
    "id": 1938,
    "student": "Karen Lee",
    "subject": "Islamic Studies",
    "class": "6G",
    "teacher": "Linda Moore",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1939,
    "student": "Patricia Anderson",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 75
  },
  {
    "id": 1940,
    "student": "Patricia Anderson",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1941,
    "student": "Mary Thompson",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 91
  },
  {
    "id": 1942,
    "student": "Mary Thompson",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 1943,
    "student": "Ruth Carter 2",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 65
  },
  {
    "id": 1944,
    "student": "Ruth Carter 2",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 1945,
    "student": "Karen Jackson",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 87
  },
  {
    "id": 1946,
    "student": "Karen Jackson",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 1947,
    "student": "Stephanie Barnes",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1948,
    "student": "Stephanie Barnes",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 1949,
    "student": "Heather Barnes",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 52
  },
  {
    "id": 1950,
    "student": "Heather Barnes",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 1951,
    "student": "Melissa Hall 2",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 100
  },
  {
    "id": 1952,
    "student": "Melissa Hall 2",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1953,
    "student": "Karen Lee",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-04",
    "type": "exam",
    "score": 69
  },
  {
    "id": 1954,
    "student": "Karen Lee",
    "subject": "Mathematics",
    "class": "6G",
    "teacher": "Patricia Young",
    "date": "2026-03-10",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 1955,
    "student": "Patricia Anderson",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1956,
    "student": "Patricia Anderson",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 1957,
    "student": "Mary Thompson",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 95
  },
  {
    "id": 1958,
    "student": "Mary Thompson",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 1959,
    "student": "Ruth Carter 2",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1960,
    "student": "Ruth Carter 2",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1961,
    "student": "Karen Jackson",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 53
  },
  {
    "id": 1962,
    "student": "Karen Jackson",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 1963,
    "student": "Stephanie Barnes",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1964,
    "student": "Stephanie Barnes",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 1965,
    "student": "Heather Barnes",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 64
  },
  {
    "id": 1966,
    "student": "Heather Barnes",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1967,
    "student": "Melissa Hall 2",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 89
  },
  {
    "id": 1968,
    "student": "Melissa Hall 2",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1969,
    "student": "Karen Lee",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-03-17",
    "type": "exam",
    "score": 99
  },
  {
    "id": 1970,
    "student": "Karen Lee",
    "subject": "Pakistan Studies",
    "class": "6G",
    "teacher": "Dennis Griffin",
    "date": "2026-04-13",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 1971,
    "student": "Patricia Anderson",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 80
  },
  {
    "id": 1972,
    "student": "Patricia Anderson",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 1973,
    "student": "Mary Thompson",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 74
  },
  {
    "id": 1974,
    "student": "Mary Thompson",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 1975,
    "student": "Ruth Carter 2",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 56
  },
  {
    "id": 1976,
    "student": "Ruth Carter 2",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 1977,
    "student": "Karen Jackson",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 98
  },
  {
    "id": 1978,
    "student": "Karen Jackson",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 1979,
    "student": "Stephanie Barnes",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 97
  },
  {
    "id": 1980,
    "student": "Stephanie Barnes",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 1981,
    "student": "Heather Barnes",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1982,
    "student": "Heather Barnes",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 1983,
    "student": "Melissa Hall 2",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 79
  },
  {
    "id": 1984,
    "student": "Melissa Hall 2",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 1985,
    "student": "Karen Lee",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-03-06",
    "type": "exam",
    "score": 94
  },
  {
    "id": 1986,
    "student": "Karen Lee",
    "subject": "Physical Education",
    "class": "6G",
    "teacher": "George Barnes",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1987,
    "student": "Patricia Anderson",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 54
  },
  {
    "id": 1988,
    "student": "Patricia Anderson",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 1989,
    "student": "Mary Thompson",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 55
  },
  {
    "id": 1990,
    "student": "Mary Thompson",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 1991,
    "student": "Ruth Carter 2",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 73
  },
  {
    "id": 1992,
    "student": "Ruth Carter 2",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 1993,
    "student": "Karen Jackson",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 77
  },
  {
    "id": 1994,
    "student": "Karen Jackson",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 1995,
    "student": "Stephanie Barnes",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 82
  },
  {
    "id": 1996,
    "student": "Stephanie Barnes",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 1997,
    "student": "Heather Barnes",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 68
  },
  {
    "id": 1998,
    "student": "Heather Barnes",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 1999,
    "student": "Melissa Hall 2",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 72
  },
  {
    "id": 2000,
    "student": "Melissa Hall 2",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2001,
    "student": "Karen Lee",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-04-07",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2002,
    "student": "Karen Lee",
    "subject": "Social Studies",
    "class": "6G",
    "teacher": "Angela Rogers",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2003,
    "student": "Patricia Anderson",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2004,
    "student": "Patricia Anderson",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2005,
    "student": "Mary Thompson",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2006,
    "student": "Mary Thompson",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2007,
    "student": "Ruth Carter 2",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2008,
    "student": "Ruth Carter 2",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2009,
    "student": "Karen Jackson",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2010,
    "student": "Karen Jackson",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2011,
    "student": "Stephanie Barnes",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2012,
    "student": "Stephanie Barnes",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2013,
    "student": "Heather Barnes",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2014,
    "student": "Heather Barnes",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2015,
    "student": "Melissa Hall 2",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 72
  },
  {
    "id": 2016,
    "student": "Melissa Hall 2",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2017,
    "student": "Karen Lee",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2018,
    "student": "Karen Lee",
    "subject": "Urdu Language",
    "class": "6G",
    "teacher": "Charles Barnes",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2019,
    "student": "Benjamin Sullivan",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2020,
    "student": "Benjamin Sullivan",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2021,
    "student": "Mark Collins",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2022,
    "student": "Mark Collins",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2023,
    "student": "Andrew Foster",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 98
  },
  {
    "id": 2024,
    "student": "Andrew Foster",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2025,
    "student": "Robert Rogers",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2026,
    "student": "Robert Rogers",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2027,
    "student": "Benjamin Young",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2028,
    "student": "Benjamin Young",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2029,
    "student": "Thomas Wright",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2030,
    "student": "Thomas Wright",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2031,
    "student": "Dennis Hill",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2032,
    "student": "Dennis Hill",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2033,
    "student": "Larry Fisher",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-03-19",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2034,
    "student": "Larry Fisher",
    "subject": "Computer Science",
    "class": "7B",
    "teacher": "Carolyn Reed",
    "date": "2026-01-21",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2035,
    "student": "Benjamin Sullivan",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 71
  },
  {
    "id": 2036,
    "student": "Benjamin Sullivan",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2037,
    "student": "Mark Collins",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2038,
    "student": "Mark Collins",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2039,
    "student": "Andrew Foster",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2040,
    "student": "Andrew Foster",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2041,
    "student": "Robert Rogers",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2042,
    "student": "Robert Rogers",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2043,
    "student": "Benjamin Young",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2044,
    "student": "Benjamin Young",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2045,
    "student": "Thomas Wright",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 50
  },
  {
    "id": 2046,
    "student": "Thomas Wright",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2047,
    "student": "Dennis Hill",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2048,
    "student": "Dennis Hill",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2049,
    "student": "Larry Fisher",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-03-18",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2050,
    "student": "Larry Fisher",
    "subject": "English Language",
    "class": "7B",
    "teacher": "Jason Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2051,
    "student": "Benjamin Sullivan",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2052,
    "student": "Benjamin Sullivan",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2053,
    "student": "Mark Collins",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2054,
    "student": "Mark Collins",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2055,
    "student": "Andrew Foster",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2056,
    "student": "Andrew Foster",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2057,
    "student": "Robert Rogers",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2058,
    "student": "Robert Rogers",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2059,
    "student": "Benjamin Young",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2060,
    "student": "Benjamin Young",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2061,
    "student": "Thomas Wright",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2062,
    "student": "Thomas Wright",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2063,
    "student": "Dennis Hill",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2064,
    "student": "Dennis Hill",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2065,
    "student": "Larry Fisher",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-03-09",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2066,
    "student": "Larry Fisher",
    "subject": "General Science",
    "class": "7B",
    "teacher": "Michael Cruz",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2067,
    "student": "Benjamin Sullivan",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2068,
    "student": "Benjamin Sullivan",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2069,
    "student": "Mark Collins",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2070,
    "student": "Mark Collins",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2071,
    "student": "Andrew Foster",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2072,
    "student": "Andrew Foster",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 2073,
    "student": "Robert Rogers",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2074,
    "student": "Robert Rogers",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 2075,
    "student": "Benjamin Young",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2076,
    "student": "Benjamin Young",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2077,
    "student": "Thomas Wright",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2078,
    "student": "Thomas Wright",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2079,
    "student": "Dennis Hill",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2080,
    "student": "Dennis Hill",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2081,
    "student": "Larry Fisher",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-23",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2082,
    "student": "Larry Fisher",
    "subject": "Geography",
    "class": "7B",
    "teacher": "Richard Morgan",
    "date": "2026-03-07",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2083,
    "student": "Benjamin Sullivan",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2084,
    "student": "Benjamin Sullivan",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2085,
    "student": "Mark Collins",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2086,
    "student": "Mark Collins",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2087,
    "student": "Andrew Foster",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2088,
    "student": "Andrew Foster",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2089,
    "student": "Robert Rogers",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 99
  },
  {
    "id": 2090,
    "student": "Robert Rogers",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2091,
    "student": "Benjamin Young",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2092,
    "student": "Benjamin Young",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2093,
    "student": "Thomas Wright",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2094,
    "student": "Thomas Wright",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2095,
    "student": "Dennis Hill",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2096,
    "student": "Dennis Hill",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2097,
    "student": "Larry Fisher",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-04",
    "type": "exam",
    "score": 58
  },
  {
    "id": 2098,
    "student": "Larry Fisher",
    "subject": "Islamic Studies",
    "class": "7B",
    "teacher": "Anthony Ross",
    "date": "2026-04-22",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2099,
    "student": "Benjamin Sullivan",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2100,
    "student": "Benjamin Sullivan",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2101,
    "student": "Mark Collins",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2102,
    "student": "Mark Collins",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2103,
    "student": "Andrew Foster",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 58
  },
  {
    "id": 2104,
    "student": "Andrew Foster",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2105,
    "student": "Robert Rogers",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2106,
    "student": "Robert Rogers",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2107,
    "student": "Benjamin Young",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 93
  },
  {
    "id": 2108,
    "student": "Benjamin Young",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2109,
    "student": "Thomas Wright",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2110,
    "student": "Thomas Wright",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2111,
    "student": "Dennis Hill",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2112,
    "student": "Dennis Hill",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2113,
    "student": "Larry Fisher",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-03-12",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2114,
    "student": "Larry Fisher",
    "subject": "Mathematics",
    "class": "7B",
    "teacher": "Scott Flores",
    "date": "2026-02-06",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2115,
    "student": "Benjamin Sullivan",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2116,
    "student": "Benjamin Sullivan",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2117,
    "student": "Mark Collins",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2118,
    "student": "Mark Collins",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2119,
    "student": "Andrew Foster",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2120,
    "student": "Andrew Foster",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2121,
    "student": "Robert Rogers",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 98
  },
  {
    "id": 2122,
    "student": "Robert Rogers",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2123,
    "student": "Benjamin Young",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2124,
    "student": "Benjamin Young",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2125,
    "student": "Thomas Wright",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2126,
    "student": "Thomas Wright",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2127,
    "student": "Dennis Hill",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2128,
    "student": "Dennis Hill",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2129,
    "student": "Larry Fisher",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-03-24",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2130,
    "student": "Larry Fisher",
    "subject": "Pakistan Studies",
    "class": "7B",
    "teacher": "Amy Collins",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2131,
    "student": "Benjamin Sullivan",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2132,
    "student": "Benjamin Sullivan",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2133,
    "student": "Mark Collins",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2134,
    "student": "Mark Collins",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2135,
    "student": "Andrew Foster",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2136,
    "student": "Andrew Foster",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2137,
    "student": "Robert Rogers",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2138,
    "student": "Robert Rogers",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2139,
    "student": "Benjamin Young",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2140,
    "student": "Benjamin Young",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2141,
    "student": "Thomas Wright",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2142,
    "student": "Thomas Wright",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2143,
    "student": "Dennis Hill",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2144,
    "student": "Dennis Hill",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2145,
    "student": "Larry Fisher",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-17",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2146,
    "student": "Larry Fisher",
    "subject": "Physical Education",
    "class": "7B",
    "teacher": "George Barnes",
    "date": "2026-03-08",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2147,
    "student": "Benjamin Sullivan",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2148,
    "student": "Benjamin Sullivan",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2149,
    "student": "Mark Collins",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2150,
    "student": "Mark Collins",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2151,
    "student": "Andrew Foster",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2152,
    "student": "Andrew Foster",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 2153,
    "student": "Robert Rogers",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2154,
    "student": "Robert Rogers",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2155,
    "student": "Benjamin Young",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2156,
    "student": "Benjamin Young",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 2157,
    "student": "Thomas Wright",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 71
  },
  {
    "id": 2158,
    "student": "Thomas Wright",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 2159,
    "student": "Dennis Hill",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2160,
    "student": "Dennis Hill",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2161,
    "student": "Larry Fisher",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 71
  },
  {
    "id": 2162,
    "student": "Larry Fisher",
    "subject": "Social Studies",
    "class": "7B",
    "teacher": "Rebecca Hill",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2163,
    "student": "Benjamin Sullivan",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 54
  },
  {
    "id": 2164,
    "student": "Benjamin Sullivan",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2165,
    "student": "Mark Collins",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2166,
    "student": "Mark Collins",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2167,
    "student": "Andrew Foster",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2168,
    "student": "Andrew Foster",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2169,
    "student": "Robert Rogers",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2170,
    "student": "Robert Rogers",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2171,
    "student": "Benjamin Young",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2172,
    "student": "Benjamin Young",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2173,
    "student": "Thomas Wright",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2174,
    "student": "Thomas Wright",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2175,
    "student": "Dennis Hill",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2176,
    "student": "Dennis Hill",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 2177,
    "student": "Larry Fisher",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-03",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2178,
    "student": "Larry Fisher",
    "subject": "Urdu Language",
    "class": "7B",
    "teacher": "Charles Barnes",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2179,
    "student": "Donna Gray",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2180,
    "student": "Donna Gray",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 2181,
    "student": "Amy Evans",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2182,
    "student": "Amy Evans",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2183,
    "student": "Sarah Rogers",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2184,
    "student": "Sarah Rogers",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2185,
    "student": "Anna Baker",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2186,
    "student": "Anna Baker",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2187,
    "student": "Mary Jackson",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2188,
    "student": "Mary Jackson",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2189,
    "student": "Deborah Hill",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2190,
    "student": "Deborah Hill",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2191,
    "student": "Donna Hill",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2192,
    "student": "Donna Hill",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2193,
    "student": "Elizabeth Lee",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-03-08",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2194,
    "student": "Elizabeth Lee",
    "subject": "Computer Science",
    "class": "7G",
    "teacher": "Sandra Lee",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2195,
    "student": "Donna Gray",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2196,
    "student": "Donna Gray",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2197,
    "student": "Amy Evans",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2198,
    "student": "Amy Evans",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 2199,
    "student": "Sarah Rogers",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2200,
    "student": "Sarah Rogers",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2201,
    "student": "Anna Baker",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2202,
    "student": "Anna Baker",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2203,
    "student": "Mary Jackson",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2204,
    "student": "Mary Jackson",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2205,
    "student": "Deborah Hill",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2206,
    "student": "Deborah Hill",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2207,
    "student": "Donna Hill",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2208,
    "student": "Donna Hill",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 2209,
    "student": "Elizabeth Lee",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-03-16",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2210,
    "student": "Elizabeth Lee",
    "subject": "English Language",
    "class": "7G",
    "teacher": "Brian Morgan",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 2211,
    "student": "Donna Gray",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 58
  },
  {
    "id": 2212,
    "student": "Donna Gray",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 2213,
    "student": "Amy Evans",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2214,
    "student": "Amy Evans",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2215,
    "student": "Sarah Rogers",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2216,
    "student": "Sarah Rogers",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2217,
    "student": "Anna Baker",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2218,
    "student": "Anna Baker",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2219,
    "student": "Mary Jackson",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2220,
    "student": "Mary Jackson",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2221,
    "student": "Deborah Hill",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2222,
    "student": "Deborah Hill",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2223,
    "student": "Donna Hill",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2224,
    "student": "Donna Hill",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 2225,
    "student": "Elizabeth Lee",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-03-11",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2226,
    "student": "Elizabeth Lee",
    "subject": "General Science",
    "class": "7G",
    "teacher": "Michael Cruz",
    "date": "2026-02-25",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 2227,
    "student": "Donna Gray",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2228,
    "student": "Donna Gray",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2229,
    "student": "Amy Evans",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 98
  },
  {
    "id": 2230,
    "student": "Amy Evans",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2231,
    "student": "Sarah Rogers",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2232,
    "student": "Sarah Rogers",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2233,
    "student": "Anna Baker",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 72
  },
  {
    "id": 2234,
    "student": "Anna Baker",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2235,
    "student": "Mary Jackson",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 63
  },
  {
    "id": 2236,
    "student": "Mary Jackson",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2237,
    "student": "Deborah Hill",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 72
  },
  {
    "id": 2238,
    "student": "Deborah Hill",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 2239,
    "student": "Donna Hill",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2240,
    "student": "Donna Hill",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2241,
    "student": "Elizabeth Lee",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-03-25",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2242,
    "student": "Elizabeth Lee",
    "subject": "Geography",
    "class": "7G",
    "teacher": "Benjamin Griffin",
    "date": "2026-05-19",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2243,
    "student": "Donna Gray",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2244,
    "student": "Donna Gray",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 2245,
    "student": "Amy Evans",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2246,
    "student": "Amy Evans",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2247,
    "student": "Sarah Rogers",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2248,
    "student": "Sarah Rogers",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 2249,
    "student": "Anna Baker",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2250,
    "student": "Anna Baker",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2251,
    "student": "Mary Jackson",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2252,
    "student": "Mary Jackson",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2253,
    "student": "Deborah Hill",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2254,
    "student": "Deborah Hill",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2255,
    "student": "Donna Hill",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2256,
    "student": "Donna Hill",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 2257,
    "student": "Elizabeth Lee",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-03-02",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2258,
    "student": "Elizabeth Lee",
    "subject": "Islamic Studies",
    "class": "7G",
    "teacher": "Scott Evans",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2259,
    "student": "Donna Gray",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2260,
    "student": "Donna Gray",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2261,
    "student": "Amy Evans",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 72
  },
  {
    "id": 2262,
    "student": "Amy Evans",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 2263,
    "student": "Sarah Rogers",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2264,
    "student": "Sarah Rogers",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 2265,
    "student": "Anna Baker",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2266,
    "student": "Anna Baker",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2267,
    "student": "Mary Jackson",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2268,
    "student": "Mary Jackson",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2269,
    "student": "Deborah Hill",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 63
  },
  {
    "id": 2270,
    "student": "Deborah Hill",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2271,
    "student": "Donna Hill",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2272,
    "student": "Donna Hill",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2273,
    "student": "Elizabeth Lee",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-04-11",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2274,
    "student": "Elizabeth Lee",
    "subject": "Mathematics",
    "class": "7G",
    "teacher": "Brian Collins",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2275,
    "student": "Donna Gray",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2276,
    "student": "Donna Gray",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2277,
    "student": "Amy Evans",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2278,
    "student": "Amy Evans",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2279,
    "student": "Sarah Rogers",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2280,
    "student": "Sarah Rogers",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2281,
    "student": "Anna Baker",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2282,
    "student": "Anna Baker",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2283,
    "student": "Mary Jackson",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2284,
    "student": "Mary Jackson",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2285,
    "student": "Deborah Hill",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2286,
    "student": "Deborah Hill",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2287,
    "student": "Donna Hill",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 93
  },
  {
    "id": 2288,
    "student": "Donna Hill",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2289,
    "student": "Elizabeth Lee",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-03-15",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2290,
    "student": "Elizabeth Lee",
    "subject": "Pakistan Studies",
    "class": "7G",
    "teacher": "Susan Jackson",
    "date": "2026-04-27",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2291,
    "student": "Donna Gray",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2292,
    "student": "Donna Gray",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2293,
    "student": "Amy Evans",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2294,
    "student": "Amy Evans",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2295,
    "student": "Sarah Rogers",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2296,
    "student": "Sarah Rogers",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2297,
    "student": "Anna Baker",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2298,
    "student": "Anna Baker",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2299,
    "student": "Mary Jackson",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2300,
    "student": "Mary Jackson",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2301,
    "student": "Deborah Hill",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2302,
    "student": "Deborah Hill",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2303,
    "student": "Donna Hill",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2304,
    "student": "Donna Hill",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2305,
    "student": "Elizabeth Lee",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-03-25",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2306,
    "student": "Elizabeth Lee",
    "subject": "Physical Education",
    "class": "7G",
    "teacher": "Thomas Watson",
    "date": "2026-05-09",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2307,
    "student": "Donna Gray",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2308,
    "student": "Donna Gray",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2309,
    "student": "Amy Evans",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2310,
    "student": "Amy Evans",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2311,
    "student": "Sarah Rogers",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2312,
    "student": "Sarah Rogers",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2313,
    "student": "Anna Baker",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2314,
    "student": "Anna Baker",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2315,
    "student": "Mary Jackson",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2316,
    "student": "Mary Jackson",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2317,
    "student": "Deborah Hill",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2318,
    "student": "Deborah Hill",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2319,
    "student": "Donna Hill",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2320,
    "student": "Donna Hill",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2321,
    "student": "Elizabeth Lee",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2322,
    "student": "Elizabeth Lee",
    "subject": "Social Studies",
    "class": "7G",
    "teacher": "Rebecca Hill",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2323,
    "student": "Donna Gray",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2324,
    "student": "Donna Gray",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 2325,
    "student": "Amy Evans",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2326,
    "student": "Amy Evans",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2327,
    "student": "Sarah Rogers",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2328,
    "student": "Sarah Rogers",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2329,
    "student": "Anna Baker",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2330,
    "student": "Anna Baker",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2331,
    "student": "Mary Jackson",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2332,
    "student": "Mary Jackson",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2333,
    "student": "Deborah Hill",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2334,
    "student": "Deborah Hill",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2335,
    "student": "Donna Hill",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2336,
    "student": "Donna Hill",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2337,
    "student": "Elizabeth Lee",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-04-11",
    "type": "exam",
    "score": 99
  },
  {
    "id": 2338,
    "student": "Elizabeth Lee",
    "subject": "Urdu Language",
    "class": "7G",
    "teacher": "Joseph Henderson",
    "date": "2026-05-14",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2339,
    "student": "David Hill",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2340,
    "student": "David Hill",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2341,
    "student": "Dennis Evans",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2342,
    "student": "Dennis Evans",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2343,
    "student": "Andrew King",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2344,
    "student": "Andrew King",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2345,
    "student": "Daniel Collins",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2346,
    "student": "Daniel Collins",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 2347,
    "student": "Jack Diaz",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2348,
    "student": "Jack Diaz",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2349,
    "student": "Steven Hill",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-03-31",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2350,
    "student": "Steven Hill",
    "subject": "Biology",
    "class": "8B",
    "teacher": "Gary Morgan",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2351,
    "student": "David Hill",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2352,
    "student": "David Hill",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-01-26",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2353,
    "student": "Dennis Evans",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2354,
    "student": "Dennis Evans",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-01-26",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2355,
    "student": "Andrew King",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2356,
    "student": "Andrew King",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-01-26",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2357,
    "student": "Daniel Collins",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2358,
    "student": "Daniel Collins",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-01-26",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2359,
    "student": "Jack Diaz",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2360,
    "student": "Jack Diaz",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-01-26",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 2361,
    "student": "Steven Hill",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-01",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2362,
    "student": "Steven Hill",
    "subject": "Chemistry",
    "class": "8B",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-01-26",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 2363,
    "student": "David Hill",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2364,
    "student": "David Hill",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 2365,
    "student": "Dennis Evans",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07",
    "type": "exam",
    "score": 63
  },
  {
    "id": 2366,
    "student": "Dennis Evans",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2367,
    "student": "Andrew King",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2368,
    "student": "Andrew King",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2369,
    "student": "Daniel Collins",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2370,
    "student": "Daniel Collins",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2371,
    "student": "Jack Diaz",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2372,
    "student": "Jack Diaz",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2373,
    "student": "Steven Hill",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-03-07",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2374,
    "student": "Steven Hill",
    "subject": "Computer Science",
    "class": "8B",
    "teacher": "Scott Butler",
    "date": "2026-04-14",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2375,
    "student": "David Hill",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2376,
    "student": "David Hill",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2377,
    "student": "Dennis Evans",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2378,
    "student": "Dennis Evans",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2379,
    "student": "Andrew King",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2380,
    "student": "Andrew King",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2381,
    "student": "Daniel Collins",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2382,
    "student": "Daniel Collins",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2383,
    "student": "Jack Diaz",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2384,
    "student": "Jack Diaz",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 2385,
    "student": "Steven Hill",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2386,
    "student": "Steven Hill",
    "subject": "Economics",
    "class": "8B",
    "teacher": "Mary Powell",
    "date": "2026-05-07",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2387,
    "student": "David Hill",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2388,
    "student": "David Hill",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2389,
    "student": "Dennis Evans",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2390,
    "student": "Dennis Evans",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2391,
    "student": "Andrew King",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2392,
    "student": "Andrew King",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 2393,
    "student": "Daniel Collins",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2394,
    "student": "Daniel Collins",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2395,
    "student": "Jack Diaz",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2396,
    "student": "Jack Diaz",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2397,
    "student": "Steven Hill",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-24",
    "type": "exam",
    "score": 63
  },
  {
    "id": 2398,
    "student": "Steven Hill",
    "subject": "English Language",
    "class": "8B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 72
  },
  {
    "id": 2399,
    "student": "David Hill",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2400,
    "student": "David Hill",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2401,
    "student": "Dennis Evans",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19",
    "type": "exam",
    "score": 98
  },
  {
    "id": 2402,
    "student": "Dennis Evans",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2403,
    "student": "Andrew King",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2404,
    "student": "Andrew King",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2405,
    "student": "Daniel Collins",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2406,
    "student": "Daniel Collins",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2407,
    "student": "Jack Diaz",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2408,
    "student": "Jack Diaz",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2409,
    "student": "Steven Hill",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-03-19",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2410,
    "student": "Steven Hill",
    "subject": "Islamic Studies",
    "class": "8B",
    "teacher": "Heather Morgan",
    "date": "2026-01-23",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2411,
    "student": "David Hill",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2412,
    "student": "David Hill",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2413,
    "student": "Dennis Evans",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2414,
    "student": "Dennis Evans",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2415,
    "student": "Andrew King",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31",
    "type": "exam",
    "score": 93
  },
  {
    "id": 2416,
    "student": "Andrew King",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2417,
    "student": "Daniel Collins",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2418,
    "student": "Daniel Collins",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2419,
    "student": "Jack Diaz",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2420,
    "student": "Jack Diaz",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 2421,
    "student": "Steven Hill",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-31",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2422,
    "student": "Steven Hill",
    "subject": "Mathematics",
    "class": "8B",
    "teacher": "Patrick Hill",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2423,
    "student": "David Hill",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2424,
    "student": "David Hill",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2425,
    "student": "Dennis Evans",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2426,
    "student": "Dennis Evans",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2427,
    "student": "Andrew King",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2428,
    "student": "Andrew King",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 2429,
    "student": "Daniel Collins",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2430,
    "student": "Daniel Collins",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2431,
    "student": "Jack Diaz",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2432,
    "student": "Jack Diaz",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2433,
    "student": "Steven Hill",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-04-01",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2434,
    "student": "Steven Hill",
    "subject": "Pakistan Studies",
    "class": "8B",
    "teacher": "Emily Barnes",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2435,
    "student": "David Hill",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2436,
    "student": "David Hill",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2437,
    "student": "Dennis Evans",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2438,
    "student": "Dennis Evans",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2439,
    "student": "Andrew King",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2440,
    "student": "Andrew King",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2441,
    "student": "Daniel Collins",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08",
    "type": "exam",
    "score": 50
  },
  {
    "id": 2442,
    "student": "Daniel Collins",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2443,
    "student": "Jack Diaz",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2444,
    "student": "Jack Diaz",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 2445,
    "student": "Steven Hill",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-08",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2446,
    "student": "Steven Hill",
    "subject": "Physical Education",
    "class": "8B",
    "teacher": "Raymond Jackson 2",
    "date": "2026-03-19",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 2447,
    "student": "David Hill",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2448,
    "student": "David Hill",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2449,
    "student": "Dennis Evans",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2450,
    "student": "Dennis Evans",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2451,
    "student": "Andrew King",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2452,
    "student": "Andrew King",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2453,
    "student": "Daniel Collins",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2454,
    "student": "Daniel Collins",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 2455,
    "student": "Jack Diaz",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2456,
    "student": "Jack Diaz",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2457,
    "student": "Steven Hill",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-05",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2458,
    "student": "Steven Hill",
    "subject": "Physics",
    "class": "8B",
    "teacher": "Frank Hill",
    "date": "2026-04-21",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2459,
    "student": "David Hill",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2460,
    "student": "David Hill",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2461,
    "student": "Dennis Evans",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01",
    "type": "exam",
    "score": 50
  },
  {
    "id": 2462,
    "student": "Dennis Evans",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2463,
    "student": "Andrew King",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2464,
    "student": "Andrew King",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2465,
    "student": "Daniel Collins",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2466,
    "student": "Daniel Collins",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2467,
    "student": "Jack Diaz",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2468,
    "student": "Jack Diaz",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2469,
    "student": "Steven Hill",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-04-01",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2470,
    "student": "Steven Hill",
    "subject": "Urdu Language",
    "class": "8B",
    "teacher": "Shirley Hill",
    "date": "2026-01-31",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 2471,
    "student": "Nancy Morgan",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-03-26",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2472,
    "student": "Nancy Morgan",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2473,
    "student": "Amy Henderson",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-03-26",
    "type": "exam",
    "score": 54
  },
  {
    "id": 2474,
    "student": "Amy Henderson",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2475,
    "student": "Karen Foster",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-03-26",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2476,
    "student": "Karen Foster",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2477,
    "student": "Emily Bailey",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-03-26",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2478,
    "student": "Emily Bailey",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2479,
    "student": "Melissa Lee",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-03-26",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2480,
    "student": "Melissa Lee",
    "subject": "Biology",
    "class": "8G",
    "teacher": "Ryan Collins",
    "date": "2026-02-04",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2481,
    "student": "Nancy Morgan",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-04-01",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2482,
    "student": "Nancy Morgan",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2483,
    "student": "Amy Henderson",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-04-01",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2484,
    "student": "Amy Henderson",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2485,
    "student": "Karen Foster",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-04-01",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2486,
    "student": "Karen Foster",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 60
  },
  {
    "id": 2487,
    "student": "Emily Bailey",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-04-01",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2488,
    "student": "Emily Bailey",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2489,
    "student": "Melissa Lee",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-04-01",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2490,
    "student": "Melissa Lee",
    "subject": "Chemistry",
    "class": "8G",
    "teacher": "Ryan Campbell",
    "date": "2026-03-22",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2491,
    "student": "Nancy Morgan",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-12",
    "type": "exam",
    "score": 54
  },
  {
    "id": 2492,
    "student": "Nancy Morgan",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2493,
    "student": "Amy Henderson",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-12",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2494,
    "student": "Amy Henderson",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2495,
    "student": "Karen Foster",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-12",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2496,
    "student": "Karen Foster",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2497,
    "student": "Emily Bailey",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-12",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2498,
    "student": "Emily Bailey",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2499,
    "student": "Melissa Lee",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-12",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2500,
    "student": "Melissa Lee",
    "subject": "Computer Science",
    "class": "8G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-16",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2501,
    "student": "Nancy Morgan",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2502,
    "student": "Nancy Morgan",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2503,
    "student": "Amy Henderson",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2504,
    "student": "Amy Henderson",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2505,
    "student": "Karen Foster",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2506,
    "student": "Karen Foster",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2507,
    "student": "Emily Bailey",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2508,
    "student": "Emily Bailey",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2509,
    "student": "Melissa Lee",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2510,
    "student": "Melissa Lee",
    "subject": "Economics",
    "class": "8G",
    "teacher": "Ryan Diaz",
    "date": "2026-03-15",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 2511,
    "student": "Nancy Morgan",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2512,
    "student": "Nancy Morgan",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-27",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2513,
    "student": "Amy Henderson",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2514,
    "student": "Amy Henderson",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-27",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2515,
    "student": "Karen Foster",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2516,
    "student": "Karen Foster",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-27",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2517,
    "student": "Emily Bailey",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2518,
    "student": "Emily Bailey",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-27",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2519,
    "student": "Melissa Lee",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-29",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2520,
    "student": "Melissa Lee",
    "subject": "English Language",
    "class": "8G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-27",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2521,
    "student": "Nancy Morgan",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-03-08",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2522,
    "student": "Nancy Morgan",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2523,
    "student": "Amy Henderson",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-03-08",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2524,
    "student": "Amy Henderson",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2525,
    "student": "Karen Foster",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-03-08",
    "type": "exam",
    "score": 98
  },
  {
    "id": 2526,
    "student": "Karen Foster",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2527,
    "student": "Emily Bailey",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-03-08",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2528,
    "student": "Emily Bailey",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2529,
    "student": "Melissa Lee",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-03-08",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2530,
    "student": "Melissa Lee",
    "subject": "Islamic Studies",
    "class": "8G",
    "teacher": "Nancy Baker",
    "date": "2026-02-13",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 2531,
    "student": "Nancy Morgan",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-03-05",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2532,
    "student": "Nancy Morgan",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-02-23",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2533,
    "student": "Amy Henderson",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-03-05",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2534,
    "student": "Amy Henderson",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-02-23",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2535,
    "student": "Karen Foster",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-03-05",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2536,
    "student": "Karen Foster",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-02-23",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2537,
    "student": "Emily Bailey",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-03-05",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2538,
    "student": "Emily Bailey",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-02-23",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 2539,
    "student": "Melissa Lee",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-03-05",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2540,
    "student": "Melissa Lee",
    "subject": "Mathematics",
    "class": "8G",
    "teacher": "Jerry Flores",
    "date": "2026-02-23",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2541,
    "student": "Nancy Morgan",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2542,
    "student": "Nancy Morgan",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2543,
    "student": "Amy Henderson",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2544,
    "student": "Amy Henderson",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2545,
    "student": "Karen Foster",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2546,
    "student": "Karen Foster",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2547,
    "student": "Emily Bailey",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2548,
    "student": "Emily Bailey",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2549,
    "student": "Melissa Lee",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-24",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2550,
    "student": "Melissa Lee",
    "subject": "Pakistan Studies",
    "class": "8G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-17",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2551,
    "student": "Nancy Morgan",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-03-31",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2552,
    "student": "Nancy Morgan",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2553,
    "student": "Amy Henderson",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-03-31",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2554,
    "student": "Amy Henderson",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2555,
    "student": "Karen Foster",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-03-31",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2556,
    "student": "Karen Foster",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2557,
    "student": "Emily Bailey",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-03-31",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2558,
    "student": "Emily Bailey",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2559,
    "student": "Melissa Lee",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-03-31",
    "type": "exam",
    "score": 100
  },
  {
    "id": 2560,
    "student": "Melissa Lee",
    "subject": "Physical Education",
    "class": "8G",
    "teacher": "Linda Evans",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2561,
    "student": "Nancy Morgan",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-03-22",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2562,
    "student": "Nancy Morgan",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2563,
    "student": "Amy Henderson",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-03-22",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2564,
    "student": "Amy Henderson",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 2565,
    "student": "Karen Foster",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-03-22",
    "type": "exam",
    "score": 54
  },
  {
    "id": 2566,
    "student": "Karen Foster",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2567,
    "student": "Emily Bailey",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-03-22",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2568,
    "student": "Emily Bailey",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2569,
    "student": "Melissa Lee",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-03-22",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2570,
    "student": "Melissa Lee",
    "subject": "Physics",
    "class": "8G",
    "teacher": "Christine Lee",
    "date": "2026-04-01",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2571,
    "student": "Nancy Morgan",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2572,
    "student": "Nancy Morgan",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2573,
    "student": "Amy Henderson",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2574,
    "student": "Amy Henderson",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2575,
    "student": "Karen Foster",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 58
  },
  {
    "id": 2576,
    "student": "Karen Foster",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 2577,
    "student": "Emily Bailey",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2578,
    "student": "Emily Bailey",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2579,
    "student": "Melissa Lee",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-04",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2580,
    "student": "Melissa Lee",
    "subject": "Urdu Language",
    "class": "8G",
    "teacher": "Cynthia Barnes",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2581,
    "student": "Raymond Evans",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2582,
    "student": "Raymond Evans",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 64
  },
  {
    "id": 2583,
    "student": "George Collins",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2584,
    "student": "George Collins",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2585,
    "student": "George Lee",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2586,
    "student": "George Lee",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2587,
    "student": "Justin Griffin",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2588,
    "student": "Justin Griffin",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 2589,
    "student": "Aaron Griffin",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2590,
    "student": "Aaron Griffin",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2591,
    "student": "Larry Griffin",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-04-02",
    "type": "exam",
    "score": 58
  },
  {
    "id": 2592,
    "student": "Larry Griffin",
    "subject": "Biology",
    "class": "9B",
    "teacher": "Ryan Collins",
    "date": "2026-02-17",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2593,
    "student": "Raymond Evans",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2594,
    "student": "Raymond Evans",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-04-25",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2595,
    "student": "George Collins",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2596,
    "student": "George Collins",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-04-25",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2597,
    "student": "George Lee",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2598,
    "student": "George Lee",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-04-25",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2599,
    "student": "Justin Griffin",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2600,
    "student": "Justin Griffin",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-04-25",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2601,
    "student": "Aaron Griffin",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2602,
    "student": "Aaron Griffin",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-04-25",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2603,
    "student": "Larry Griffin",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-03-31",
    "type": "exam",
    "score": 84
  },
  {
    "id": 2604,
    "student": "Larry Griffin",
    "subject": "Chemistry",
    "class": "9B",
    "teacher": "Ryan Campbell",
    "date": "2026-04-25",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2605,
    "student": "Raymond Evans",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2606,
    "student": "Raymond Evans",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2607,
    "student": "George Collins",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2608,
    "student": "George Collins",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 2609,
    "student": "George Lee",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2610,
    "student": "George Lee",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2611,
    "student": "Justin Griffin",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2612,
    "student": "Justin Griffin",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 54
  },
  {
    "id": 2613,
    "student": "Aaron Griffin",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2614,
    "student": "Aaron Griffin",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 2615,
    "student": "Larry Griffin",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-03-14",
    "type": "exam",
    "score": 63
  },
  {
    "id": 2616,
    "student": "Larry Griffin",
    "subject": "Computer Science",
    "class": "9B",
    "teacher": "Cynthia Butler",
    "date": "2026-04-02",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2617,
    "student": "Raymond Evans",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09",
    "type": "exam",
    "score": 96
  },
  {
    "id": 2618,
    "student": "Raymond Evans",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2619,
    "student": "George Collins",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09",
    "type": "exam",
    "score": 93
  },
  {
    "id": 2620,
    "student": "George Collins",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 81
  },
  {
    "id": 2621,
    "student": "George Lee",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2622,
    "student": "George Lee",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2623,
    "student": "Justin Griffin",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2624,
    "student": "Justin Griffin",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2625,
    "student": "Aaron Griffin",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2626,
    "student": "Aaron Griffin",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2627,
    "student": "Larry Griffin",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-04-09",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2628,
    "student": "Larry Griffin",
    "subject": "Economics",
    "class": "9B",
    "teacher": "Ryan Diaz",
    "date": "2026-05-11",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2629,
    "student": "Raymond Evans",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2630,
    "student": "Raymond Evans",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2631,
    "student": "George Collins",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2632,
    "student": "George Collins",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2633,
    "student": "George Lee",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2634,
    "student": "George Lee",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2635,
    "student": "Justin Griffin",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2636,
    "student": "Justin Griffin",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2637,
    "student": "Aaron Griffin",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2638,
    "student": "Aaron Griffin",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2639,
    "student": "Larry Griffin",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-03-25",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2640,
    "student": "Larry Griffin",
    "subject": "English Language",
    "class": "9B",
    "teacher": "Dorothy Powell",
    "date": "2026-02-03",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2641,
    "student": "Raymond Evans",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2642,
    "student": "Raymond Evans",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2643,
    "student": "George Collins",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2644,
    "student": "George Collins",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 70
  },
  {
    "id": 2645,
    "student": "George Lee",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2646,
    "student": "George Lee",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2647,
    "student": "Justin Griffin",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2648,
    "student": "Justin Griffin",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 96
  },
  {
    "id": 2649,
    "student": "Aaron Griffin",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04",
    "type": "exam",
    "score": 69
  },
  {
    "id": 2650,
    "student": "Aaron Griffin",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2651,
    "student": "Larry Griffin",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-03-04",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2652,
    "student": "Larry Griffin",
    "subject": "Islamic Studies",
    "class": "9B",
    "teacher": "Nancy Baker",
    "date": "2026-05-20",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2653,
    "student": "Raymond Evans",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2654,
    "student": "Raymond Evans",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2655,
    "student": "George Collins",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2656,
    "student": "George Collins",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 88
  },
  {
    "id": 2657,
    "student": "George Lee",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2658,
    "student": "George Lee",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2659,
    "student": "Justin Griffin",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2660,
    "student": "Justin Griffin",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2661,
    "student": "Aaron Griffin",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "exam",
    "score": 89
  },
  {
    "id": 2662,
    "student": "Aaron Griffin",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2663,
    "student": "Larry Griffin",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "exam",
    "score": 58
  },
  {
    "id": 2664,
    "student": "Larry Griffin",
    "subject": "Mathematics",
    "class": "9B",
    "teacher": "Jerry Flores",
    "date": "2026-03-28",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2665,
    "student": "Raymond Evans",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2666,
    "student": "Raymond Evans",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 58
  },
  {
    "id": 2667,
    "student": "George Collins",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2668,
    "student": "George Collins",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2669,
    "student": "George Lee",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2670,
    "student": "George Lee",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2671,
    "student": "Justin Griffin",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2672,
    "student": "Justin Griffin",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2673,
    "student": "Aaron Griffin",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2674,
    "student": "Aaron Griffin",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 66
  },
  {
    "id": 2675,
    "student": "Larry Griffin",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-03-04",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2676,
    "student": "Larry Griffin",
    "subject": "Pakistan Studies",
    "class": "9B",
    "teacher": "Stephanie Watson",
    "date": "2026-02-19",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2677,
    "student": "Raymond Evans",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2678,
    "student": "Raymond Evans",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2679,
    "student": "George Collins",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2680,
    "student": "George Collins",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2681,
    "student": "George Lee",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2682,
    "student": "George Lee",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2683,
    "student": "Justin Griffin",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2684,
    "student": "Justin Griffin",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2685,
    "student": "Aaron Griffin",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2686,
    "student": "Aaron Griffin",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2687,
    "student": "Larry Griffin",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-04-03",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2688,
    "student": "Larry Griffin",
    "subject": "Physical Education",
    "class": "9B",
    "teacher": "Linda Evans",
    "date": "2026-02-10",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 2689,
    "student": "Raymond Evans",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02",
    "type": "exam",
    "score": 91
  },
  {
    "id": 2690,
    "student": "Raymond Evans",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2691,
    "student": "George Collins",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2692,
    "student": "George Collins",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2693,
    "student": "George Lee",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02",
    "type": "exam",
    "score": 76
  },
  {
    "id": 2694,
    "student": "George Lee",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 2695,
    "student": "Justin Griffin",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2696,
    "student": "Justin Griffin",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2697,
    "student": "Aaron Griffin",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2698,
    "student": "Aaron Griffin",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2699,
    "student": "Larry Griffin",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-04-02",
    "type": "exam",
    "score": 77
  },
  {
    "id": 2700,
    "student": "Larry Griffin",
    "subject": "Physics",
    "class": "9B",
    "teacher": "Christine Lee",
    "date": "2026-05-10",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2701,
    "student": "Raymond Evans",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2702,
    "student": "Raymond Evans",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2703,
    "student": "George Collins",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2704,
    "student": "George Collins",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2705,
    "student": "George Lee",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2706,
    "student": "George Lee",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2707,
    "student": "Justin Griffin",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2708,
    "student": "Justin Griffin",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2709,
    "student": "Aaron Griffin",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2710,
    "student": "Aaron Griffin",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2711,
    "student": "Larry Griffin",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-03-21",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2712,
    "student": "Larry Griffin",
    "subject": "Urdu Language",
    "class": "9B",
    "teacher": "Cynthia Barnes",
    "date": "2026-02-16",
    "type": "assignment",
    "score": 82
  },
  {
    "id": 2713,
    "student": "Patricia Butler",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 75
  },
  {
    "id": 2714,
    "student": "Patricia Butler",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2715,
    "student": "Catherine Cruz",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2716,
    "student": "Catherine Cruz",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2717,
    "student": "Carolyn Young",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2718,
    "student": "Carolyn Young",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 99
  },
  {
    "id": 2719,
    "student": "Barbara Young",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 71
  },
  {
    "id": 2720,
    "student": "Barbara Young",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2721,
    "student": "Michelle Butler 2",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2722,
    "student": "Michelle Butler 2",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 2723,
    "student": "Jessica Reed",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2724,
    "student": "Jessica Reed",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 2725,
    "student": "Amy Anderson",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-03-07",
    "type": "exam",
    "score": 93
  },
  {
    "id": 2726,
    "student": "Amy Anderson",
    "subject": "Biology",
    "class": "9G",
    "teacher": "Christopher Griffin",
    "date": "2026-01-30",
    "type": "assignment",
    "score": 97
  },
  {
    "id": 2727,
    "student": "Patricia Butler",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 54
  },
  {
    "id": 2728,
    "student": "Patricia Butler",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2729,
    "student": "Catherine Cruz",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 85
  },
  {
    "id": 2730,
    "student": "Catherine Cruz",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2731,
    "student": "Carolyn Young",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 73
  },
  {
    "id": 2732,
    "student": "Carolyn Young",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2733,
    "student": "Barbara Young",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2734,
    "student": "Barbara Young",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2735,
    "student": "Michelle Butler 2",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2736,
    "student": "Michelle Butler 2",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 80
  },
  {
    "id": 2737,
    "student": "Jessica Reed",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 71
  },
  {
    "id": 2738,
    "student": "Jessica Reed",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2739,
    "student": "Amy Anderson",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-03-31",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2740,
    "student": "Amy Anderson",
    "subject": "Chemistry",
    "class": "9G",
    "teacher": "Carolyn Rogers 2",
    "date": "2026-02-22",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2741,
    "student": "Patricia Butler",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2742,
    "student": "Patricia Butler",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2743,
    "student": "Catherine Cruz",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 92
  },
  {
    "id": 2744,
    "student": "Catherine Cruz",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 61
  },
  {
    "id": 2745,
    "student": "Carolyn Young",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2746,
    "student": "Carolyn Young",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2747,
    "student": "Barbara Young",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2748,
    "student": "Barbara Young",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2749,
    "student": "Michelle Butler 2",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 83
  },
  {
    "id": 2750,
    "student": "Michelle Butler 2",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2751,
    "student": "Jessica Reed",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 80
  },
  {
    "id": 2752,
    "student": "Jessica Reed",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2753,
    "student": "Amy Anderson",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-03-30",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2754,
    "student": "Amy Anderson",
    "subject": "Computer Science",
    "class": "9G",
    "teacher": "Cynthia Butler",
    "date": "2026-05-18",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2755,
    "student": "Patricia Butler",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2756,
    "student": "Patricia Butler",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 59
  },
  {
    "id": 2757,
    "student": "Catherine Cruz",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2758,
    "student": "Catherine Cruz",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2759,
    "student": "Carolyn Young",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2760,
    "student": "Carolyn Young",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2761,
    "student": "Barbara Young",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2762,
    "student": "Barbara Young",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 69
  },
  {
    "id": 2763,
    "student": "Michelle Butler 2",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2764,
    "student": "Michelle Butler 2",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2765,
    "student": "Jessica Reed",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 63
  },
  {
    "id": 2766,
    "student": "Jessica Reed",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2767,
    "student": "Amy Anderson",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-03-30",
    "type": "exam",
    "score": 50
  },
  {
    "id": 2768,
    "student": "Amy Anderson",
    "subject": "Economics",
    "class": "9G",
    "teacher": "Mary Powell",
    "date": "2026-04-30",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2769,
    "student": "Patricia Butler",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2770,
    "student": "Patricia Butler",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 74
  },
  {
    "id": 2771,
    "student": "Catherine Cruz",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2772,
    "student": "Catherine Cruz",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 50
  },
  {
    "id": 2773,
    "student": "Carolyn Young",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2774,
    "student": "Carolyn Young",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 90
  },
  {
    "id": 2775,
    "student": "Barbara Young",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 74
  },
  {
    "id": 2776,
    "student": "Barbara Young",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2777,
    "student": "Michelle Butler 2",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 50
  },
  {
    "id": 2778,
    "student": "Michelle Butler 2",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2779,
    "student": "Jessica Reed",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 64
  },
  {
    "id": 2780,
    "student": "Jessica Reed",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2781,
    "student": "Amy Anderson",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-03-09",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2782,
    "student": "Amy Anderson",
    "subject": "English Language",
    "class": "9G",
    "teacher": "Margaret Jackson",
    "date": "2026-01-29",
    "type": "assignment",
    "score": 65
  },
  {
    "id": 2783,
    "student": "Patricia Butler",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 51
  },
  {
    "id": 2784,
    "student": "Patricia Butler",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 87
  },
  {
    "id": 2785,
    "student": "Catherine Cruz",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 56
  },
  {
    "id": 2786,
    "student": "Catherine Cruz",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2787,
    "student": "Carolyn Young",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 95
  },
  {
    "id": 2788,
    "student": "Carolyn Young",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 76
  },
  {
    "id": 2789,
    "student": "Barbara Young",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2790,
    "student": "Barbara Young",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2791,
    "student": "Michelle Butler 2",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2792,
    "student": "Michelle Butler 2",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 55
  },
  {
    "id": 2793,
    "student": "Jessica Reed",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2794,
    "student": "Jessica Reed",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2795,
    "student": "Amy Anderson",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-03-29",
    "type": "exam",
    "score": 68
  },
  {
    "id": 2796,
    "student": "Amy Anderson",
    "subject": "Islamic Studies",
    "class": "9G",
    "teacher": "Heather Morgan",
    "date": "2026-04-10",
    "type": "assignment",
    "score": 63
  },
  {
    "id": 2797,
    "student": "Patricia Butler",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 53
  },
  {
    "id": 2798,
    "student": "Patricia Butler",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2799,
    "student": "Catherine Cruz",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2800,
    "student": "Catherine Cruz",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 52
  },
  {
    "id": 2801,
    "student": "Carolyn Young",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 57
  },
  {
    "id": 2802,
    "student": "Carolyn Young",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 98
  },
  {
    "id": 2803,
    "student": "Barbara Young",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2804,
    "student": "Barbara Young",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 51
  },
  {
    "id": 2805,
    "student": "Michelle Butler 2",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2806,
    "student": "Michelle Butler 2",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2807,
    "student": "Jessica Reed",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 87
  },
  {
    "id": 2808,
    "student": "Jessica Reed",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 94
  },
  {
    "id": 2809,
    "student": "Amy Anderson",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-03-21",
    "type": "exam",
    "score": 81
  },
  {
    "id": 2810,
    "student": "Amy Anderson",
    "subject": "Mathematics",
    "class": "9G",
    "teacher": "Timothy Watson",
    "date": "2026-02-01",
    "type": "assignment",
    "score": 85
  },
  {
    "id": 2811,
    "student": "Patricia Butler",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2812,
    "student": "Patricia Butler",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2813,
    "student": "Catherine Cruz",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 59
  },
  {
    "id": 2814,
    "student": "Catherine Cruz",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 84
  },
  {
    "id": 2815,
    "student": "Carolyn Young",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2816,
    "student": "Carolyn Young",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 67
  },
  {
    "id": 2817,
    "student": "Barbara Young",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 72
  },
  {
    "id": 2818,
    "student": "Barbara Young",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 75
  },
  {
    "id": 2819,
    "student": "Michelle Butler 2",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 60
  },
  {
    "id": 2820,
    "student": "Michelle Butler 2",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 62
  },
  {
    "id": 2821,
    "student": "Jessica Reed",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 55
  },
  {
    "id": 2822,
    "student": "Jessica Reed",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2823,
    "student": "Amy Anderson",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-03-14",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2824,
    "student": "Amy Anderson",
    "subject": "Pakistan Studies",
    "class": "9G",
    "teacher": "Stephanie Watson",
    "date": "2026-02-24",
    "type": "assignment",
    "score": 100
  },
  {
    "id": 2825,
    "student": "Patricia Butler",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 99
  },
  {
    "id": 2826,
    "student": "Patricia Butler",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2827,
    "student": "Catherine Cruz",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 90
  },
  {
    "id": 2828,
    "student": "Catherine Cruz",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2829,
    "student": "Carolyn Young",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 88
  },
  {
    "id": 2830,
    "student": "Carolyn Young",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2831,
    "student": "Barbara Young",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 62
  },
  {
    "id": 2832,
    "student": "Barbara Young",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 68
  },
  {
    "id": 2833,
    "student": "Michelle Butler 2",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 86
  },
  {
    "id": 2834,
    "student": "Michelle Butler 2",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 93
  },
  {
    "id": 2835,
    "student": "Jessica Reed",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2836,
    "student": "Jessica Reed",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 53
  },
  {
    "id": 2837,
    "student": "Amy Anderson",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-04-12",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2838,
    "student": "Amy Anderson",
    "subject": "Physical Education",
    "class": "9G",
    "teacher": "Raymond Jackson 2",
    "date": "2026-05-01",
    "type": "assignment",
    "score": 73
  },
  {
    "id": 2839,
    "student": "Patricia Butler",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 82
  },
  {
    "id": 2840,
    "student": "Patricia Butler",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 56
  },
  {
    "id": 2841,
    "student": "Catherine Cruz",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 52
  },
  {
    "id": 2842,
    "student": "Catherine Cruz",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 71
  },
  {
    "id": 2843,
    "student": "Carolyn Young",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2844,
    "student": "Carolyn Young",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 95
  },
  {
    "id": 2845,
    "student": "Barbara Young",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 97
  },
  {
    "id": 2846,
    "student": "Barbara Young",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 91
  },
  {
    "id": 2847,
    "student": "Michelle Butler 2",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 66
  },
  {
    "id": 2848,
    "student": "Michelle Butler 2",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 92
  },
  {
    "id": 2849,
    "student": "Jessica Reed",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 67
  },
  {
    "id": 2850,
    "student": "Jessica Reed",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 77
  },
  {
    "id": 2851,
    "student": "Amy Anderson",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-03-24",
    "type": "exam",
    "score": 99
  },
  {
    "id": 2852,
    "student": "Amy Anderson",
    "subject": "Physics",
    "class": "9G",
    "teacher": "Frank Hill",
    "date": "2026-01-28",
    "type": "assignment",
    "score": 83
  },
  {
    "id": 2853,
    "student": "Patricia Butler",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 78
  },
  {
    "id": 2854,
    "student": "Patricia Butler",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 78
  },
  {
    "id": 2855,
    "student": "Catherine Cruz",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 79
  },
  {
    "id": 2856,
    "student": "Catherine Cruz",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 79
  },
  {
    "id": 2857,
    "student": "Carolyn Young",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 98
  },
  {
    "id": 2858,
    "student": "Carolyn Young",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 86
  },
  {
    "id": 2859,
    "student": "Barbara Young",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 70
  },
  {
    "id": 2860,
    "student": "Barbara Young",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2861,
    "student": "Michelle Butler 2",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 94
  },
  {
    "id": 2862,
    "student": "Michelle Butler 2",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 89
  },
  {
    "id": 2863,
    "student": "Jessica Reed",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 61
  },
  {
    "id": 2864,
    "student": "Jessica Reed",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 57
  },
  {
    "id": 2865,
    "student": "Amy Anderson",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-03-08",
    "type": "exam",
    "score": 65
  },
  {
    "id": 2866,
    "student": "Amy Anderson",
    "subject": "Urdu Language",
    "class": "9G",
    "teacher": "Shirley Hill",
    "date": "2026-04-20",
    "type": "assignment",
    "score": 97
  }
];

export const eventsData = [
  {
    "id": 1,
    "title": "Annual Sports Day",
    "class": "3B",
    "date": "2026-02-18",
    "startTime": "08:00",
    "endTime": "10:00"
  },
  {
    "id": 2,
    "title": "Science Exhibition",
    "class": "",
    "date": "2026-03-04",
    "startTime": "09:00",
    "endTime": "12:00"
  },
  {
    "id": 3,
    "title": "Art & Craft Fair",
    "class": "8B",
    "date": "2026-01-26",
    "startTime": "09:00",
    "endTime": "13:00"
  },
  {
    "id": 4,
    "title": "Independence Day Celebration",
    "class": "1G",
    "date": "2026-05-09",
    "startTime": "08:00",
    "endTime": "10:00"
  },
  {
    "id": 5,
    "title": "Book Fair",
    "class": "",
    "date": "2026-01-19",
    "startTime": "08:00",
    "endTime": "11:00"
  },
  {
    "id": 6,
    "title": "Math Olympiad",
    "class": "9B",
    "date": "2026-04-30",
    "startTime": "08:00",
    "endTime": "10:00"
  },
  {
    "id": 7,
    "title": "Spelling Bee",
    "class": "1G",
    "date": "2026-04-30",
    "startTime": "10:00",
    "endTime": "12:00"
  },
  {
    "id": 8,
    "title": "Inter-Class Cricket Tournament",
    "class": "",
    "date": "2026-05-20",
    "startTime": "10:00",
    "endTime": "13:00"
  },
  {
    "id": 9,
    "title": "Parent Teacher Meeting",
    "class": "",
    "date": "2026-05-24",
    "startTime": "10:00",
    "endTime": "12:00"
  },
  {
    "id": 10,
    "title": "Library Book Fair",
    "class": "",
    "date": "2026-05-05",
    "startTime": "10:00",
    "endTime": "12:00"
  },
  {
    "id": 11,
    "title": "Computer Lab Orientation",
    "class": "",
    "date": "2026-01-21",
    "startTime": "08:00",
    "endTime": "10:00"
  },
  {
    "id": 12,
    "title": "Gardening Day",
    "class": "7G",
    "date": "2026-05-21",
    "startTime": "09:00",
    "endTime": "12:00"
  },
  {
    "id": 13,
    "title": "Drama & Theatre Show",
    "class": "10B",
    "date": "2026-06-12",
    "startTime": "09:00",
    "endTime": "12:00"
  },
  {
    "id": 14,
    "title": "School Funfair",
    "class": "",
    "date": "2026-03-22",
    "startTime": "09:00",
    "endTime": "12:00"
  },
  {
    "id": 15,
    "title": "Prize Distribution Ceremony",
    "class": "2B",
    "date": "2026-06-02",
    "startTime": "09:00",
    "endTime": "13:00"
  }
];

export const announcementsData = [
  {
    "id": 1,
    "title": "Mid-Term Exam Schedule Released",
    "class": "",
    "date": "2026-05-15"
  },
  {
    "id": 2,
    "title": "Fee Submission Deadline Reminder",
    "class": "",
    "date": "2026-02-05"
  },
  {
    "id": 3,
    "title": "Public Holiday Notice",
    "class": "",
    "date": "2026-04-30"
  },
  {
    "id": 4,
    "title": "New Library Books Available",
    "class": "10G",
    "date": "2026-01-16"
  },
  {
    "id": 5,
    "title": "Science Lab Safety Rules Update",
    "class": "",
    "date": "2026-06-12"
  },
  {
    "id": 6,
    "title": "Sports Day Registration Open",
    "class": "",
    "date": "2026-03-28"
  },
  {
    "id": 7,
    "title": "Online Learning Resources Added",
    "class": "",
    "date": "2026-04-27"
  },
  {
    "id": 8,
    "title": "Parent Teacher Meeting Scheduled",
    "class": "5B",
    "date": "2026-01-10"
  },
  {
    "id": 9,
    "title": "Winter Break Holiday Announcement",
    "class": "4G",
    "date": "2026-04-09"
  },
  {
    "id": 10,
    "title": "Result Cards Distribution Date",
    "class": "7B",
    "date": "2026-02-05"
  },
  {
    "id": 11,
    "title": "New Canteen Menu",
    "class": "",
    "date": "2026-06-13"
  },
  {
    "id": 12,
    "title": "Student ID Card Collection",
    "class": "6B",
    "date": "2026-03-29"
  },
  {
    "id": 13,
    "title": "Book List for Next Term",
    "class": "",
    "date": "2026-06-04"
  },
  {
    "id": 14,
    "title": "Fire Drill Exercise Tomorrow",
    "class": "",
    "date": "2026-06-03"
  },
  {
    "id": 15,
    "title": "Scholarship Applications Open",
    "class": "1B",
    "date": "2026-04-30"
  }
];

