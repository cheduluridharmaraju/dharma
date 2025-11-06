<!DOCTYPE html>
<hmtl>
<head>
    <title>registration form</title>
</head>
<body>
    <h1> registration form</h1>
    <form action="/submit" method="post">
        <label for="full name">full name:</label><br>
        <input type ="text" id="full name" name="full name" required><br><br>
        <label for="user name">username:</label><br>
        <input type="text" id="user name" name="user name" reqquired><br><br>
        <label for="email">email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="password">password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <label for="confirmpassword">confirmpassword:</label><br>
        <input type="password" id ="confirmpassword" name="confirmpassword" required><br><br>
        <label>gender:</label><br>
        <input type="radio" name="gender" value="male">male
        <input type="radio" name="gender" value="female">female<br><br>
        <label for="phone">phone number:</label><br>
        <input type="tel" id="phone" name="phone" maxlength="10"><br>
         <label for="country">Country:</label><br>
        <select id="country" name="country">
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
       </select><br><br>
        <label for="photo">Upload Photo:</label><br>
        <input type="file" id="photo" name="photo"><br><br>
          <input type="submit" value="Register">
         <input type="reset" value="Clear">

    </form>
</body>
</hmtl>







    
</hmtl>
