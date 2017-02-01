 __  __  ____  ____ 
(  \/  )(  _ \(_  _)
 )    (  )(_) ) )(  
(_/\/\_)(____/ (__) 
 ____   __    ___  ___  _    _  _____  ____  ____  
(  _ \ /__\  / __)/ __)( \/\/ )(  _  )(  _ \(  _ \ 
 )___//(__)\ \__ \\__ \ )    (  )(_)(  )   / )(_) )
(__) (__)(__)(___/(___/(__/\__)(_____)(_)\_)(____/ 
 ___  ____  ____  ____  _  _  ___  ____  _   _ 
/ __)(_  _)(  _ \( ___)( \( )/ __)(_  _)( )_( )
\__ \  )(   )   / )__)  )  (( (_-.  )(   ) _ ( 
(___/ (__) (_)\_)(____)(_)\_)\___/ (__) (_) (_)

Simple Angular directive that helps validating and evaluating 
password strength.

<h4>How it works</h4>
```html
<input ng-model="password" name="password" type="password" required
       mdt-password-strength
       mdt-feedback="validationResult_material"
       mdt-strength-levels='{"weak":[6,1,0,0,0],"fine":[8,2,1,1,0],"strong":[9,2,2,2,1],"unbreakable":[12,2,2,2,2]}'
/>
```

Attribute `mdt-strength-levels` accepts 2-dimensional array
```javascript
{
    "weak":[6,1,0,0,0], // 6 characters long, 1 uppercase
    "fine":[8,2,1,1,0], // 8 characters long, 2 uppercase,  1 lowercase,  1 digit
    "good":[9,2,2,2,1]  // 9 characters long, 2 uppercases, 2 lowercases, 2 digits, 1 scpecial character
}
```
however, to make the password is valid when least the first set conditions must be made.
The mdt-feedback returns the password strength level. In the given example it 
would be 'weak', 'fine', 'good' or false if the password is completely invalid



                        
                        
                        
                        
