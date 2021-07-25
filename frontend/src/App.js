import Navbar from './Navbar';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import AdminHome from './Admin/AdminHome';
import Home from './Home';
import CreateAnnouncement from './Admin/CreateAnnouncement';
import CreateTeacherAcc from './Admin/CreateTeacherAcc';
import CreateSupStaffAcc from './Admin/CreateSupStaffAcc';
import Registrations from './Admin/Registrations';
import AdCourses from './Admin/AdCourses';
import TeacherHome from './Teacher/TeacherHome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';


import './Resources/styles.css';
import './Resources/payment.css';
import Courses from './Teacher/Courses';
import CourseDetails from './Teacher/CourseDetails';
import AllCourses from './Admin/AllCourses';
import UserAccounts from './Admin/UserAccounts';
import Payments from './Admin/Payments';
import SupportingStaffHome from './SupportingStaff/SupportingStaffHome';
import StudentRegistrations from './SupportingStaff/StudentRegistrations';

import AddContent from './Teacher/AddContent';
import Announcements from './Admin/Announcements';
import StudentHome from './Student/StudentHome';
import ViewCourses from './Student/ViewCourses';
import MyCourses from './Student/MyCourses';
import HomeNew from './HomeNew';
import Footer from './Footer.js';
import MyCourseDetails from './Student/MyCourseDetails';
import StudentNotification from './Student/StudentNotification';
import StudentPayment from './Student/StudentPayment';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
        <Navbar loggedIn = { loggedIn } setLoggedIn = { setLoggedIn }/>

        <div className="content">
          <Switch> 
            <Route exact path="/">
              <HomeNew />
            </Route>

            <Route exact path="/signIn">
              <SignIn setLoggedIn = { setLoggedIn }/>
            </Route>

            <Route exact path="/signUp">
              <SignUp />
            </Route>

            <Route exact path="/adminHome">
              <AdminHome setLoggedIn = { setLoggedIn }/>
            </Route>

            <Route exact path="/adminHome/createTeacherAcc">
              <CreateTeacherAcc />
            </Route>

            <Route exact path="/adminHome/createSupStaffAcc">
              <CreateSupStaffAcc />
            </Route>

            <Route exact path="/teacher/teacherHome">
              <TeacherHome setLoggedIn = { setLoggedIn }/>
            </Route>

            <Route exact path="/adminHome/createAnnouncement">
              <CreateAnnouncement />
            </Route>

            <Route exact path="/adminHome/registrations">
              <Registrations />
            </Route>
            

            <Route exact path="/teacher/courses">
              <Courses />
            </Route>

            <Route exact path="/teacher/courses/:id">
              <CourseDetails />
            </Route>

            <Route exact path="/adminHome/courses">
              <AdCourses />
            </Route>

            <Route exact path="/adminHome/allCourses">
              <AllCourses />
            </Route>

            <Route exact path="/adminHome/userAccounts">
              <UserAccounts />
            </Route>

            <Route exact path="/adminHome/payments">
              <Payments/>
            </Route>

            <Route exact path="/adminHome/announcements">
              <Announcements/>
            </Route>

            <Route exact path="/SupportingStaffHome">
              <SupportingStaffHome setLoggedIn = { setLoggedIn }/>
            </Route>

            <Route exact path="/supportingStaffHome/registrations">
              <StudentRegistrations/>
            </Route>
            
            <Route exact path="/teacher/addContent">
              <AddContent />
            </Route>

            <Route exact path="/studentHome">
              <StudentHome setLoggedIn = { setLoggedIn }/>
            </Route>

            <Route exact path="/studentHome/viewCourses">
              <ViewCourses />
            </Route>

            <Route exact path="/studentHome/myCourses">
              <MyCourses />
            </Route>

            <Route exact path="/studentHome/myCourses/:id">
              <MyCourseDetails />
            </Route>

            <Route exact path="/studentHome/notifications">
              <StudentNotification/>
            </Route>

            <Route exact path="/studentHome/payments">
              <StudentPayment/>
            </Route>

            <Route exact path="/studentHome/payments/payslip">
            {/* <ViewCourses /> */}
            </Route>
            
          </Switch>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;