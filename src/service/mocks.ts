export const LoginData = {
  id: "1",
  username: "John Smith",
};

export const Posts = {
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
          agree: [
            {
              userId: "1",
              createdAt: new Date(),
            },
            {
              userId: "2",
              createdAt: new Date(),
            },
            {
              userId: "3",
              createdAt: new Date(),
            },
          ],
          deviated: 12,
          createdAt: new Date("01/12/2021"),
        },
        {
          id: "2",
          user: {
            username: "Paul Beetleson",
          },
          text: "Hey!",
          agree: [],
          deviated: 0,
          createdAt: new Date("01/05/2023"),
        },
      ],
      interest: [
        {
          userId: "4",
          createdAt: new Date(),
        },
        {
          userId: "2",
          createdAt: new Date(),
        },
        {
          userId: "3",
          createdAt: new Date(),
        },
      ],
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
          agree: [
            {
              userId: "5",
              createdAt: new Date(),
            },
            {
              userId: "3",
              createdAt: new Date(),
            },
            {
              userId: "2",
              createdAt: new Date(),
            },
          ],
          deviated: 1,
          createdAt: new Date("04/01/2022"),
        },
      ],
      interest: [
        {
          userId: "5",
          createdAt: new Date(),
        },
        {
          userId: "2",
          createdAt: new Date(),
        },
        {
          userId: "3",
          createdAt: new Date(),
        },
      ],
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
          agree: [
            {
              userId: "1",
              createdAt: new Date(),
            },
            {
              userId: "2",
              createdAt: new Date(),
            },
            {
              userId: "3",
              createdAt: new Date(),
            },
          ],
          deviated: 0,
          createdAt: new Date("02/01/2022"),
        },
      ],
      interest: [
        {
          userId: "1",
          createdAt: new Date(),
        },
        {
          userId: "2",
          createdAt: new Date(),
        },
        {
          userId: "3",
          createdAt: new Date(),
        },
      ],
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
          agree: [
            {
              userId: "1",
              createdAt: new Date(),
            },
            {
              userId: "2",
              createdAt: new Date(),
            },
            {
              userId: "3",
              createdAt: new Date(),
            },
          ],
          deviated: 1,
          createdAt: new Date("28/05/2022"),
        },
      ],
      interest: [
        {
          userId: "1",
          createdAt: new Date(),
        },
        {
          userId: "2",
          createdAt: new Date(),
        },
        {
          userId: "3",
          createdAt: new Date(),
        },
      ],
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
          agree: [
            {
              userId: "1",
              createdAt: new Date(),
            },
            {
              userId: "2",
              createdAt: new Date(),
            },
            {
              userId: "3",
              createdAt: new Date(),
            },
          ],
          deviated: 18273,
          createdAt: new Date("28/05/2022"),
        },
      ],
      interest: [
        {
          userId: "1",
          createdAt: new Date(),
        },
        {
          userId: "2",
          createdAt: new Date(),
        },
        {
          userId: "3",
          createdAt: new Date(),
        },
      ],
      createdAt: new Date("20/04/2022"),
    },
  ],
};
