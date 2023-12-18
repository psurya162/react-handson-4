import React from 'react'
import "./About.css"
import {Link,BrowserRouter,NavLink} from "react-router-dom"

const About = () => {
  return (
    <div>
        <h2 className='Heading-name'>Student</h2>
       <table >
        <thead>
          <th>NAME</th>
          <th>BATCH</th>
          <th>AGE</th>
          <th>COURSE</th>
          <th>CHANGE</th>
        </thead>
        <tr>
          <td>Alok</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Anshuman</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>sushil</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>shiva</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>priti</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>pooja</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Gaytri</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Arvind</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Ramratan</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Shiv</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Drishti</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>
        <tr>
          <td>Akshra</td>
          <td>ea25</td>
          <td>21</td>
          <td>mern</td>
          <td><Link>edit</Link></td>
        </tr>


       </table>
    </div>
  )
}

export default About
