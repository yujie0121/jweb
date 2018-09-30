import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx';
import {thArray} from '../../variables/Variables.jsx';

class TableList extends Component {

    constructor(props) {
        super(props);
        this.state = {stocks: []};
    }

    componentDidMount(){
        let url = "/stock/list";
        let _this = this;

        const req = new XMLHttpRequest()
        req.onload = function () {
            let jsonData = JSON.parse(req.responseText);

            _this.setState({
                stocks: jsonData.data
            });

        }
        req.open('GET', url)
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        req.send()
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Market value rankings of Internet companies"
                                category="Here is a rank list"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.stocks.map((stock, index) => {
                                                    return (
                                                        <tr key={stock.code}>
                                                            <td  key={1}>{index+1}</td>
                                                            <td  key={2}>{stock.companyName}</td>
                                                            <td  key={3}>{stock.code}</td>
                                                            <td  key={4}>{stock.marketValue}</td>
                                                            <td  key={5}>{stock.price}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
