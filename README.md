<h1>MDT Password Strength</h1>
<h2>Simple Angular directive that helps validating and evaluating password strength.</h2>


<h3>Installation</h3>

<p><pre>npm i mdt-password-strength</pre></p>

<p><pre>npm install --save mdt-password-strength</pre></p>

<h3>Usage</h3>
Demo to find <a href="/demo/index.html">here</a>

```html
&lt;input 
   ng-model=&quot;password&quot; name=&quot;password&quot; type=&quot;password&quot; required
   mdt-password-strength
   mdt-feedback=&quot;validationResult_material&quot;
   mdt-strength-levels=&apos;{&quot;weak&quot;:[6,1,0,0,0],&quot;fine&quot;:[8,2,1,1,0],&quot;good&quot;:[9,2,2,2,1]}&apos;/&gt;
```

<p>Attribute `mdt-strength-levels` requires 2-dimensional array</p>
<pre>
```javascript
{
   "weak":[6,1,0,0,0], // 6 characters long, 1 uppercase
   "fine":[8,2,1,1,0], // 8 characters long, 2 uppercase,  1 lowercase,  1 digit
   "good":[9,2,2,2,1]  // 9 characters long, 2 uppercases, 2 lowercases, 2 digits, 1 special character
}
```
</pre>
<p>
The password is valid when at least the first ('weak' in the above example) set conditions is met.
The `mdt-feedback` returns the password strength level. In the given example it 
would be `weak`, `fine`, `good` or `false` if the password is completely invalid.
</p><p>
There must be at least 1 validation level which may be any identified by any array key, 
however each level must always have **5** integer possitive values which stand for **minimum**:
</p>
<ul>
<li>password length</li>
<li>number of uppercase characters /ABCDEFGHIJKLMNOPQRSTUVWXYZ/</li>
<li>number of lowercase characters /abcdefghijklmnopqrstuvwxyz/</li>
<li>number of digits /0-9/ </li>
<li>mumber of special characters /_+-.,!@#$%^&*();\/|<>"'/</li>




                        
                        
                        
                        
