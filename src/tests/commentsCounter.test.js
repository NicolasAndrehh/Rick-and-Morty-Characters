import countComments from '../__mocks__/commentsCounterMock.js';

const CommentsArray = [{
    "comment": "This is nice!",
    "creation_date": "2021-01-10",
    "username": "John"
},
{
    "comment": "This is nice!",
    "creation_date": "2021-01-10",
    "username": "John"
},
{
    "comment": "This is nice!",
    "creation_date": "2021-01-10",
    "username": "John"
},
{
    "comment": "This is nice!",
    "creation_date": "2021-01-10",
    "username": "John"
},
{
    "comment": "This is nice!",
    "creation_date": "2021-01-10",
    "username": "John"
}
]
const emptyArray = [];

describe('Test for comments counter', () => {
    test('It must count all the comments display in comment container', () => {
        expect(countComments(CommentsArray)).toBe(5);
    });
    test('If there no comments it should return 0', () => {
        expect(countComments(emptyArray)).toBe(0);
    });
});



