import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-2"
      >
        Dashboard
      </div>
      <div>
        <Link to="/dashboard/profile/4a4c1551-ba4a-442b-9aed-92b29273cf34">Go to Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go to Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard

/*
Внутри должно быть три элемента

div с id="title" и текстом Dashboard
ссылка(реакт) с навигацией /dashboard/profile/92589c47-3214-4bd9-bc56-f53706d94798 и 
текстом "Go To Profile"
ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
*/
