import React  from 'react';
import Article from './component/Article'
import Hello from './component/Hello'
import ReactRouter, { BrowserRouter, Route, PropsRoute, Link } from 'react-router-dom';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            source: 'source',
            articles: []
        }
    }

    componentWillMount(){
        fetch('https://newsapi.org/v1/articles?source=bbc-news&sortBy?&apiKey=c6b3fe2e86d54cae8dcb10dc77d5c5fc')
        .then(res =>{return res.json()})
        .then( data => {
          let dataSet = []
          data.articles.forEach((el)=>{
            el.routerUrl = "/" + el.title.substring(0, 30).toLowerCase().replace(/[^A-Z0-9]/ig, "-").replace(/--/g, "-");
            console.log(el.routerUrl);
            dataSet.push(el)
            });
          this.setState({ source: data.source, articles: dataSet });
        })
    }

  render(){
    const test= {title:"pong", description: "tennis de table"};

    const testRoute = (
      <Route
          path= '/simple'
          key = 'simple'
          render = {() => <Hello />}
      />
    );

    const testLink =
        (<li>
            <Link 
                to=  '/simple' 
                key= 'simple'
            >Hello</Link>
        </li>);

    const links= this.state.articles.map( (elem) =>{
        return(
            <li>
                <Link 
                    to=  { elem.routerUrl } 
                    key= { elem.routerUrl } > 
                         { elem.title }
                    </Link>
            </li>
        )} 
    );
    
    const routes=  this.state.articles.map( (elem) =>{
      return(
          <Route 
              path= { elem.routerUrl }
              key = { elem.routerUrl }
              render= 
                  {
                      (props) => (< Article data= {elem} />)
                  }
          />
      )} 
  );

    
    return(
        <div className = "news">
            <h2>News :  {JSON.stringify(this.state.source)}</h2>
            <div id='data'>
                <h3>Articles</h3>
                <BrowserRouter>
                  <div>
                      <ul>
                          { links }
                          { testLink }
                      </ul>

                      { routes }
                      { testRoute }
                              
                  </div>
                </BrowserRouter>                      
            </div>
          </div>
  )}
}
