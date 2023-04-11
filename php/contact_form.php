<?php
print_r($_POST);

$contact_submit = $_POST['contact-form-submit'] ?? '';

if ($contact_submit == 'submited') {

    $name = trim(strip_tags($_POST['name'] ?? ""));
    $surname = strip_tags($_POST['surname'] ?? "");
    $email = trim(strip_tags($_POST['email'] ?? ""));
    $phone = (int) (strip_tags($_POST['phone'] ?? ""));
    $question = strip_tags($_POST['question'] ?? "");

    echo "Function!";

    echo "<br><b>The name is $name</b>";
    echo "<br><b>The surname is $surname</b>";
    echo "<br><b>The email is $email</b>";
    echo "<br><b>The phone is $phone</b>";
    echo "<br><b>The question is $question</b>";
}

?>
<style>
    label {
        display: block;
        width: 150px;
    }
</style>
<form class="contact-form" method="post" action="" name="contact-form">
    <div class="contact-form-row">
        <label for="get-name">Ім'я<span class="red-star">*</span></label>
        <input id="get-name" type="text" name="name" required>
    </div>
    <div class="contact-form-row">
        <label for="get-surname">Фамілія</label>
        <input id="get-surname" type="text" name="surname">
    </div>
    <div class="contact-form-row">
        <label for="get-email">Email<span class="red-star">*</span></label>
        <input id="get-email" type="email" name="email" required>
    </div>
    <div class="contact-form-row">
        <label for="get-phone">Телефон</label>
        <input id="get-phone" type="number" name="phone">
    </div>
    <div class="contact-form-textarea">
        <textarea class="question-textarea" name="question" placeholder="Ваше запитання" id="get-question" cols="20"
            rows="5" required></textarea>
        <button class="send-quseion btn-add-bin" name="contact-form-submit" value="submited">Відправити</button>
    </div>
</form>