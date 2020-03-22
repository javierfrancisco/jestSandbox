const functions = require('./functions');


//beforeEach(() => initDatabase());
//afterEach(() => closeDatabase());


//beforeAll(() => initDatabase());
//afterAll(() => closeDatabase());

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
	beforeEach(() => nameCheck());

	test('User is Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	})

	test('User is Karen', () => {
		const user = 'Karen';
		expect(user).toBe('Karen');
	})
})

const initDatabase = () => console.log('Database Initialized');
const closeDatabase = () => console.log('Database Closed...');


test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

//not
test('Adds 2 + 2 NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

//isNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});


//tobeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual
test('User should be Javier Alvarez object', () => {
	expect(functions.createUser()).toEqual({ 
		firstName: 'Javier', 
		lastName: 'Alvarez'
	});
});


// Less than and greater than
test('Should be under 1600', () => {
	const load1 = 400;
	const load2 = 800;
	expect(load1 + load2).toBeLessThan(1600);
});

//regex
test('There is no I in team', () => {
	expect('teams').not.toMatch(/I/);
});


// Arrays
test('Admin should be in usernames', () => {
	usernames = ['john', 'karen', 'admin'];

	expect(usernames).toContain('admin');
});

//Working with Async Data

// Promise
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1);

	return functions.fetchUser()
	.then(data => {
		expect(data.name).toEqual('Leanne Graham')
	})
});

// Async Await
//test('User fetched name should be Leanne Graham', async () => {
//
//	expect.assertions(1);
//	const data = await functions.fetchUser();
//	expect(data.name).toEqual('Leanne Graham');
//	
//});