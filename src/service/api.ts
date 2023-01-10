export function getPosts() {
  setTimeout(() => {}, 2000);
  return {
    status: 200,
    data: [
      {
        id: "1",
        user: {
          username: "John Smith",
        },
        text: "Hello World",
        replies: [
          {
            id: "1",
            user: {
              username: "Mary Stark",
            },
            text: "Hello!",
            agree: 4124,
            deviated: 12,
            createdAt: new Date("01/12/2021"),
          },
        ],
        interest: 287,
        createdAt: new Date("08/11/2021"),
      },
      {
        id: "2",
        user: {
          username: "James Someoneson",
        },
        text: "My first post",
        replies: [
          {
            id: "2",
            user: {
              username: "John Smith",
            },
            text: "I agree",
            agree: 32,
            deviated: 1,
            createdAt: new Date("04/01/2022"),
          },
        ],
        interest: 234,
        createdAt: new Date("02/01/2022"),
      },
      {
        id: "3",
        user: {
          username: "Mary Stark",
        },
        text: "Happy new year",
        replies: [
          {
            id: "3",
            user: {
              username: "James Someoneson",
            },
            text: "Thanks!",
            agree: 1,
            deviated: 0,
            createdAt: new Date("02/01/2022"),
          },
        ],
        interest: 124,
        createdAt: new Date("01/01/2022"),
      },
      {
        id: "4",
        user: {
          username: "Paul Beetleson",
        },
        text: "Hi!",
        replies: [
          {
            id: "3",
            user: {
              username: "George Somebodyson",
            },
            text: "Hi, friend!",
            agree: 5125,
            deviated: 1,
            createdAt: new Date("28/05/2022"),
          },
        ],
        interest: 51214,
        createdAt: new Date("20/05/2022"),
      },
      {
        id: "5",
        user: {
          username: "Richard Fatherson",
        },
        text: "Hey!",
        replies: [
          {
            id: "4",
            user: {
              username: "Paul Beetleson",
            },
            text: "Hi!",
            agree: 19283,
            deviated: 18273,
            createdAt: new Date("28/05/2022"),
          },
        ],
        interest: 0,
        createdAt: new Date("20/04/2022"),
      },
    ],
  };
}

export function getMyActivities() {
  return {
    status: 200,
    data: [
      {
        postId: "5",
        type: "interest",
        date: new Date("02/12/2022"),
      },
      {
        postId: "4",
        type: "interest",
        date: new Date("08/12/2022"),
      },
      {
        postId: "2",
        type: "interest",
        date: new Date("01/11/2022"),
      },
      {
        postId: "1",
        type: "interest",
        date: new Date("05/02/2022"),
      },
    ],
  };
}
