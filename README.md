<b>MDT Password Strength AngularJs directive that validates password and evaluates its strength</b>
<br>

<h3>Installation</h3>

<p><pre>npm i mdt-password-strength</pre></p>
or
<p><pre>npm i --save mdt-password-strength</pre></p>

<h3>Usage</h3>
Demo <a href="https://adam-bubela.github.io/mdt-password-strength/demo">
https://adam-bubela.github.io/mdt-password-strength/demo</a>
<br><br>
```html
<input 
   ng-model="password" name="password" type="password" required
   mdt-password-strength
   mdt-feedback="validationResult_material"
   mdt-strength-levels='{"weak":[6,1,0,0,0],"fine":[8,2,1,1,0],"good":[9,2,2,2,1]}'/>
```

<p>Attribute `<i>mdt-strength-levels</i>` requires 2-dimensional array</p>

```javascript
{
   "weak":[6,1,0,0,0], // 6 characters long, 1 uppercase
   "fine":[8,2,1,1,0], // 8 characters long, 2 uppercase,  1 lowercase,  1 digit
   "good":[9,2,2,2,1]  // 9 characters long, 2 uppercases, 2 lowercases, 2 digits, 1 special character
}
```

<p>
The password is valid when at least the first ('weak' in the above example) set of conditions is met.
The <i>mdt-feedback</i> returns the password strength level. In the given example it 
would be `<i>weak</i>`, `<i>fine</i>`, `<i>good</i>` or <i>false</i> if the password is completely invalid.
</p><p>
There must be at least 1 validation level which may be identified by any array key, 
however each level must always have <b>5</b> integer possitive values which stand for the following <b>minimum</b> requirements:</p>
<ul>
<li>password length</li>
<li>number of uppercase characters `ABCDEFGHIJKLMNOPQRSTUVWXYZ`</li>
<li>number of lowercase characters `abcdefghijklmnopqrstuvwxyz`</li>
<li>number of digits `0-9` </li>
<li>mumber of special characters `_+-.,!@#$%^&*();\/|<>"'`</li>




                        
                        
                        
                        
