import Password from "../components/Password.js"
describe('password', () => {

  test('lower case', () => {
    let pass = new Password("pudding")
    expect(pass.eval())
      .toEqual({ 
        score: 1, 
        hasSpecialChar: false,
        hasLowerCase: true, 
        hasUpperCase: false,
        hasNumber: false,
        isOver8Char: false
      })
  })

  test('1 pt for special characters', () => {
    let pass = new Password("!@#$%")
    expect(pass.getScore()).toEqual(1)
  })
  
  test('has number', () => {
    let pass = new Password("cake1!")
    expect(pass.eval())
      .toEqual({ 
        score: 3, 
        hasSpecialChar: true,
        hasLowerCase: true, 
        hasUpperCase: false,
        hasNumber: true,
        isOver8Char: false
      })
  })

  test('upper case and lower', () => {
    let pass = new Password("cakePud")
    expect(pass.eval())
      .toEqual({ 
        score: 2, 
        hasSpecialChar: false,
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: false,
        isOver8Char: false
      })
  })
  test('upper lower case numbers > 8', () => {
    let pass = new Password("cakePudd1ng")
    expect(pass.eval())
      .toEqual({ 
        score: 4, 
        hasSpecialChar: false,
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        isOver8Char: true
      })
  })

  test('super strong', () => {
    let pass = new Password("cakePudd1ng!")
    expect(pass.eval())
      .toEqual({ 
        score: 5,
        hasSpecialChar: true, 
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        isOver8Char: true
      })
  })

})