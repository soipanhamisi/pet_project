# pet_website 
**Make sure you have NodeJS installed**
# **INSTALLING NodeJS ON WINDOWS**
Open PowerShell with administrator Privileges then run
<pre>winget install -e --id OpenJS.NodeJS</pre>

To confirm node is installed close and reopen Powershell and run
<pre>node -v</pre>

# **Running the application**
Once you have made sure NodeJS is installed<br><br>
On the VS Code terminal run
<pre>npm i</pre>
This will install all of the projects dependecies<br><br>

**If you get this error after running npm i**
![image](https://github.com/user-attachments/assets/10393b02-72b0-4c5e-a833-cf0585ba89fb)
Open Powershell as an administrator and run
<pre>Set-ExecutionPolicy RemoteSigned</pre>

Then go back to your application's terminal on VS CODE

**To start the application run**
<pre>npm start</pre>
Database is stored locally and designed by drawsql
