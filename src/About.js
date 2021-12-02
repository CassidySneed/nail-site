import React from 'react'

function About() {
  return (
    <div class="col-lg-1"> 
      <p class="lead mb-4 col-lg-1">Sign Up for More Infomation</p>
      <form action="#">
        <input type="text" class="form-control mb-2 mr-sm-2 col-lg-1" placeholder="First Name"/>
        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Last Name"/>
        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Email"/>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  )
}

export default About
