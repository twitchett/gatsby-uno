import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import update from 'immutability-helper'
import PageTitle from '../components/PageTitle.js'

export const data = {
  title: 'Contact',
  pagetype: 'page',
  path: '/contact-2',
}

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {}
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ type: "info", message: "Sending..." }, this.sendFormData)
  }

  sendFormData = () => {
    axios
      .post(this.props.contactFormURL, this.state.form)
      .then(response => {
        this.setState({ type: "success", message: "Thanks! Your message has been submitted." })
      })
      .catch(error => {
        console.log(error)
        this.setState({ type: "danger", message: "Oops! There was a problem sending your message..." })
      })
  }

  renderTextInput = (id, placeholder, icon) => {
    let field = <input
      id={ id }
      placeholder={ placeholder }
      onChange={ e => this.setState(update(this.state.form, { [id]: { $set: e.target.value }})) }
      className="form-control" type="text"
    />
    return this.renderFormGroup(field, icon)
  }

  renderTextArea = (id, placeholder, icon) => {
    let field = <textarea
      id={ id }      
      placeholder={ placeholder }
      onChange={ e => this.setState(update(this.state.form, { [id]: { $set: e.target.value }})) }
      className="form-control">
    </textarea>
    return this.renderFormGroup(field, icon)
  }

  renderButton = (type, text, className, icon) => {
    let field = <button type={ type } className={ "btn " + className }>{ text } <span className={ "glyphicon " + icon }></span></button>
    return this.renderFormGroup(field)
  }

  renderFormGroup = (field, icon) => {
    return (
      <div className="form-group">
        <div className="col-md-8 inputGroupContainer">
          <div className="input-group">
           { icon && <span className="input-group-addon"><i className={ "glyphicon " + icon }></i></span> }
           { field }
          </div>
        </div>
      </div>
    )
  }

  render = () => {
    let alertEl
    if (this.state.type && this.state.message) {
      let classString = 'alert alert-' + this.state.type
      alertEl = <div className={ classString }>{ this.state.message }</div>
    }

    return (
      <div>
        <PageTitle title={ data.title } />
        <form className="well form-horizontal contact_form" onSubmit={ this.handleSubmit } id="contact_form">
          { alertEl }
          <fieldset>
            { this.renderTextInput('name', 'name', 'glyphicon-user') }
            { this.renderTextInput('email', 'email', 'glyphicon-envelope') }
            { this.renderTextArea('comment', 'Say something', 'glyphicon-pencil') }
            { this.renderButton('submit', 'send', 'btn-warning', 'glyphicon-send') }
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Contact
