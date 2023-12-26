// In schemas/schema.js

export default {
    name: 'review',
    title: 'Reviews',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Enter your Name',
      },
      {
        name: 'publishedAt',
        title: 'Published Date',
        type: 'datetime',
        description: 'Select the date of review',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Enter you experience in short form',
      },
      {
        name: 'ratings',
        title: 'Ratings',
        type: 'number',
        options: {
          list: [
            { title: '1', value: 1 },
            { title: '2', value: 2 },
            { title: '3', value: 3 },
            { title: '4', value: 4 },
            { title: '5', value: 5 },
          ],
          layout: 'radio',
        },
        description: 'Select the rating for experince (1 to 5).',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Enter your review',
      },
    ],
  };
  