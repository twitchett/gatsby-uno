---
title: Contact
path: "/contact"
pagetype: page
---

Hello

<div>
  <form class="well form-horizontal contact_form" action=" " method="POST" id="contact_form">
    <div class="alert alert-success success_message" role="alert">Thanks! Your message has been submitted.</div>
    <fieldset>
      <!-- Text input-->
      <div class="form-group">
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input name="name" placeholder="name" class="form-control" type="text"/>
          </div>
        </div>
      </div>
      <!-- Text input-->
      <div class="form-group">
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
            <input name="email" placeholder="e-mail" class="form-control" type="text"/>
          </div>
        </div>
      </div>
      <!-- Text area -->
      <div class="form-group">
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
            <textarea class="form-control" name="comment" placeholder="Say something"></textarea>
          </div>
        </div>
      </div>
      <!-- Success message -->
      <!-- Button -->
      <div class="form-group">
        <div class="col-md-8">
          <button type="submit" class="btn btn-warning">Send <span class="glyphicon glyphicon-send"></span></button>
        </div>
      </div>
    </fieldset>
  </form>
</div>