
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FetchService } from "./Services/FetchService";
import BookCard from "./components/BookCard";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// const API = "https://openlibrary.org";


const App = () => {

    const [Booksarr, setBooksarr] = useState([]);
    const [SearchType, setSearchType] = useState('subject');
    const [Searchvalue, setSearchValue] = useState('general');

    useEffect(() => { FetchService.bysubject(Searchvalue, setBooksarr) },
        [Searchvalue]);

    return (
        <>
            <Container>
                <Row className="mx-auto text-center p-2">

                    <h1 className="h1 bg-gradient bg-dark text-white p-3">   Book Look</h1>
                    <Nav onSearch={setSearchValue} />
                    <Search setData={setBooksarr} />
                    {/* Searchvalue={Searchvalue} onSearchValue={setSearchValue} onSearchType={setSearchType}></Search> */}

                </Row>

                <Row className="mx-auto text-center p-2">
                    <Col className="text-center p-2" xs lg={12}>
                        {
                            Booksarr?.length > 0
                                ? (Booksarr?.length > 1
                                    ? (<div className="row "> {Booksarr.map((Book) => { return <BookCard Book={Book} /> })}
                                    </div>)
                                    : <BookCard Book={Booksarr[0]} />
                                )
                                : (Searchvalue != 'all' &&

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
                    <Col className="text-center p-2" xs lg={12}>
                        &copy; Copyright website. All right reserved
                    </Col>
                </Row>

                {/* End of copyright section  */}
            </Container>
        </>
    );
}

export default App;
