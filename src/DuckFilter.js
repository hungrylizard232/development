import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function DuckFilter(props) {
    return (
        <div className='drop-filters'>
          <div>
            <NavDropdown title="Duck Type" id="basic-nav-dropdown" onSelect={props.selectFilterType1}>
              <NavDropdown.Item href="#action/3.1" eventKey="all">all</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" eventKey="not-duck">
                not ducks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey="professional">professional ducks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey="holiday">holiday ducks</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <p>{props.type}</p>
          </div>
          <div>
            <NavDropdown title="Duck Quantity" id="basic-nav-dropdown" onSelect={props.selectFilterType2}>
              <NavDropdown.Item href="#action/3.1" eventKey="all">all</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" eventKey="3">
                3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey="4">4</NavDropdown.Item>
            </NavDropdown>
            <p>{props.quantity}</p>
          </div>
            <div>
            <input type="checkbox" checked={props.checked} onChange={props.selectSortType}></input> sort by price
            </div>
            <div>
            <Button variant="primary" onClick={props.reset}>Reset filter</Button>
            </div>
        </div>
    )
}