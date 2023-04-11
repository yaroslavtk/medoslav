<?php

//$_GET $_SERVER $_FILES

print_r($_POST);
echo "<br>";
print_r($_FILES);

if(!empty($_FILES)){
    move_uploaded_file($_FILES['fb-photo']['tmp_name'], 'uploads/' . $_FILES['fb-photo']['name']);
}

?>

<style>
    label {
        display: block;
        width: 150px;
    }
</style>

<form action="" method="post" name="feedback-form" enctype="multipart/form-data">
    <div class="feedback-form-row">
        <label for="feedback-name">Ім'я<span class="red-star">*</span></label>
        <input type="text" name="fb-name" required>
    </div>
    <div class="feedback-form-row">
        <label for="fb-surname">Прізвище</label>
        <input type="text" name="fb-surname">
    </div>
    <div class="feedback-form-row">
        <label for="fb-email">Email</label>
        <input type="email" name="fb-email">
    </div>
    <div class="feedback-form-row">
        <label for="fb-phone">Телефон</label>
        <input type="number" name="fb-phone">
    </div>
    <div class="feedback-form-row">
        <textarea class="feedback-form-textarea" name="fb-text" id="" cols="30" rows="10" placeholder="Ваш відгук"
            required></textarea>
    </div>
    <div class="feedback-form-row">
        <label for="fb-photo">Фото</label>
        <input class="fb-photo" type="file" name="fb-photo" accept="image/*">
    </div>
    <div class="feedback-form-row">
        <button class="send-feedback btn-add-bin" name="fb-form-submit" value="submited">Відправити</button>
    </div>
</form>