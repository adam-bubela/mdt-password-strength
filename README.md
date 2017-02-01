##MDT Password Strength

###Simple Angular directive that helps validating and evaluating password strength.

```html
<input 
   ng-model="password" name="password" type="password" required
   mdt-password-strength
   mdt-feedback="validationResult_material"
   mdt-strength-levels='{"weak":[6,1,0,0,0],"fine":[8,2,1,1,0],"good":[9,2,2,2,1]}'/>
```

Attribute `mdt-strength-levels` requires 2-dimensional array
```javascript
{
   "weak":[6,1,0,0,0], // 6 characters long, 1 uppercase
   "fine":[8,2,1,1,0], // 8 characters long, 2 uppercase,  1 lowercase,  1 digit
   "good":[9,2,2,2,1]  // 9 characters long, 2 uppercases, 2 lowercases, 2 digits, 1 special character
}
```
The password is valid when at least the first ('weak' in the above example) set conditions is met.
The `mdt-feedback` returns the password strength level. In the given example it 
would be `weak`, `fine`, `good` or `false` if the password is completely invalid.

There must be at least 1 validation level which may be any identified by any array key, 
however each level must always have **5** integer possitive values which stand for **minimum**:
- password length
- number of uppercase characters /ABCDEFGHIJKLMNOPQRSTUVWXYZ/
- number of lowercase characters /abcdefghijklmnopqrstuvwxyz/
- number of digits /0-9/ 
- mumber of special characters /_+-.,!@#$%^&*();\/|<>"'/




                        
                        
                        
                        
