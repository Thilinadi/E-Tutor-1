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
import StudentAccounts from './SupportingStaff/StudentAccounts';
import SearchToUpdate from './SupportingStaff/SearchToUpdate';
import ManagePayments from './SupportingStaff/ManagePayments';
import PendingReceipts from './SupportingStaff/PendingReceipts';
import AddContent from './Teacher/AddContent';
import Announcements from './Admin/Announcements';
import ViewPreviousAnnouncements from './Admin/ViewPreviousAnnouncements';
import StudentHome from './Student/StudentHome';
import ViewCourses from './Student/ViewCourses';
import MyCourses from './Student/MyCourses';
import HomeNew from './HomeNew';
import Footer from './Footer.js';
import MyCourseDetails from './Student/MyCourseDetails';
import AddQuiz from './Teacher/AddQuiz';
import TeacherQuiz from './Teacher/TeacherQuiz';
import TeacherQuizEdit from './Teacher/TeacherQuizEdit';
import AddNewCourse from './Admin/AddNewCourse';
import RecentRegistrations from './Admin/RecentRegistrations';


import StudentNotification from './Student/StudentNotification';
import StudentPayment from './Student/StudentPayment';
import StudentPayslip from './Student/StudentPayslip';

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

            <Route exact path="/adminHome/addNewCourse">
              <AddNewCourse />
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

            <Route exact path="/adminHome/courses/recentRegistrations">
              <RecentRegistrations/>
            </Route>

            <Route exact path="/adminHome/announcements/viewPreviousAnnouncements">
              <ViewPreviousAnnouncements/>
            </Route>

            <Route exact path="/SupportingStaffHome">
              <SupportingStaffHome setLoggedIn = { setLoggedIn }/>
            </Route>

            <Route exact path="/supportingStaffHome/registrations">
              <StudentRegistrations/>
            </Route>

            <Route exact path="/supportingStaffHome/studentAccounts">
              <StudentAccounts />
            </Route>
            
            <Route exact path="/supportingStaffHome/searchToUpdate">
              <SearchToUpdate />
            </Route>

            <Route exact path="/supportingStaffHome/managePayments">
              <ManagePayments />
            </Route>

            <Route exact path="/pendingReceipts">
              <PendingReceipts />
            </Route>

            <Route exact path="/teacher/addContent">
              <AddContent />
            </Route>

            <Route exact path="/teacher/addQuiz">
              <AddQuiz />
            </Route>

            <Route exact path="/teacher/courses/quiz/:id">
              <TeacherQuiz />
            </Route>
            
            <Route exact path="/teacher/courses/quiz/:id/edit">
              <TeacherQuizEdit />
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
            <StudentPayslip/>
            </Route>
            
          </Switch>
        </div>
        {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;