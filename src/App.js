
import { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FetchService } from "./Services/FetchService";
import BookCard from "./components/BookCard";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import glasses from "./assets/images/blue-glasses-64.png";

const App = () => {

    const [Booksarr, setBooksarr] = useState([]);
    const [Searchvalue, setSearchValue] = useState('general');

    useEffect(() => { FetchService.bysubject(Searchvalue, setBooksarr) },
        [Searchvalue]);

    return (
        <>
            <Container className="mx-auto text-center ">
                <Row >
                    <Col xs={12} className="text-center ">
                        <h1 role="Logo" className="h1 bg-gradient bg-dark text-white pb-3 ">
                            Book L <img alt="logo" src={glasses} className="text-white align-baseline img-fluid" />  k
                        </h1>
                    </Col>
                </Row>

                <Row className="mx-auto text-center ">
                    <Col xs={12} lg={6} className="text-center d-flex" >
                        <Nav onSearch={setSearchValue} />
                    </Col>
                    <Col xs={12} lg={6} className="text-center d-flex flex-lg-row-reverse " >
                        <Search setData={setBooksarr} />
                    </Col>
                </Row>


                <Row  >
                    <Col className=" mx-auto text-center" xs={12}>
                        {
                            Booksarr?.length > 0
                                ? (Booksarr?.length > 1
                                    ? (<div className="row "> {Booksarr.map((Book) => { return <BookCard Book={Book} /> })}
                                    </div>)
                                    : <BookCard Book={Booksarr[0]} />
                                )
                                : (Searchvalue !== '' &&

                                    < Spinner className='mx-auto' animation="border" role="status">
                                        <span className="visually-hidden mx-auto">Loading...</span>
                                    </Spinner>
                                )
                        }
                    </Col>

                </Row>
            </Container>

            <Container fluid>
                {/* Start of copyright section  */}
                < hr />
                <Row>
                    <Col className="text-center p-2" xs={12} lg={12}>
                        &copy; Copyright website. All right reserved
                    </Col>
                </Row>

                {/* End of copyright section  */}
            </Container>
        </>
    );
}

export default App;
