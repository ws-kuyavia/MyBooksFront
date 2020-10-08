import { Credentials } from './credentials.model';

describe('Credentials', () => {
  const mail = 'apiuser@kuyavia.pl';
  const pass = 'qwerty1';
  let credentials = null;

  beforeEach(() => {
    credentials = new Credentials(mail, pass);
  });

  it('should create an instance', () => {
    expect(credentials).toBeTruthy();
  });

  it('should return object', () => {
    const ret = credentials.toObject();
    expect(ret).toBeTruthy();
    expect(typeof ret).toBe('object');
  });

  it('should contain email', () => {
    const ret = credentials.toObject();
    expect(ret.hasOwnProperty('email')).toBeTruthy();
  });

  it('should contain password', () => {
    const ret = credentials.toObject();
    expect(ret.hasOwnProperty('password')).toBeTruthy();
  });
});
