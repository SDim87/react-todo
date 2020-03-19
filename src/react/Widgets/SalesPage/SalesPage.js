import React, { useState } from 'react'
import Spinner from '../../Components/Spinner'
import Aside from '../../Components/Aside'
import ErrorBoundry from '../../Components/ErrorBoundry'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import UserPanel from '../../Components/UserPanel'
import SalesTable from '../SalesTable/SalesTable'

const SalesPage = () => {
  const [isComplete, setIsComplete] = useState(false)

  setTimeout(() => {
    setIsComplete(true)
  }, 1000)

  if (isComplete === false) {
    return <Spinner />
  }
  return (
    <React.Fragment>
      <ErrorBoundry>
        <Aside />

        <div className="app__content">
          <main className="app__main">
            <div className="content">
              <Header />
              <SalesTable />
            </div>
          </main>

          <UserPanel setIsComplete={setIsComplete} />

          <Footer />
        </div>
      </ErrorBoundry>
    </React.Fragment>
  )
}

export default SalesPage
