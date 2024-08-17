import './HomePage.css'
import DataTable from '../../widgets/DataTable/DataTable';

function HomePage() {

    return (
      <>
        <div className="home__wrapper">
            <p className='home__heading'>Hi everyone.</p>
            <p className='home__text'>If you don't see data, please choose form and enter data.</p>
            <DataTable />
        </div>
      </>
    )
}
  
export default HomePage;
  