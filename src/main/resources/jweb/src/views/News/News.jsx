import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx'

class Typography extends Component {

    constructor(props) {
        super(props);
        this.state = {newsList: []};
    }

    componentDidMount(){
        let url = "/news/list";
        let _this = this;

        const req = new XMLHttpRequest()
        req.onload = function () {
            let jsonData = JSON.parse(req.responseText);

            _this.setState({
                newsList: jsonData.data
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
                                title="网易新闻"
                                category="科技频道"
                                content={
                                    this.state.newsList.map((news, index) => {
                                        return (
                                            <div className="typo-line">
                                                <p className="category">
                                                    <img src={news.imgUrl} width="120" height="80">
                                                    </img>
                                                </p>
                                                <blockquote>
                                                    <a href={news.url}>{news.title}</a>
                                                 <small>
                                                    跟帖: {news.follow}
                                                 </small>
                                                </blockquote>
                                            </div>
                                         )
                                    })
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Typography;
