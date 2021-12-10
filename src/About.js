import React from 'react'

function About() {
  return (
    <div class="col-lg-1">
      <p class="lead mb-4 col-lg-1">Sign Up for More Infomation</p>
      <div class=''>
        <div class="">
          <input type="text" class="form-control mb-2 mr-sm-2 col-lg-1" placeholder="First Name" />
        </div>
        <div>
          <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Last Name" />
        </div>
          <div>
            <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Email" />
          </div>
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </div>
    </div>
  )
}

export default About
