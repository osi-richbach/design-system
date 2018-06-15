import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AppBar.module.scss';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Logo from '../Logo';
import Button from '../Button';
import Popover from '../Popover';
import Avatar from '../Avatar';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <button
          id="Popover1"
          onClick={this.toggle}
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <Avatar invert size="sm" text="DE" />
        </button>
        <Popover
          placement="bottom-end"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <Popover.Body>
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </Popover.Body>
        </Popover>
      </div>
    );
  }
}

const defaultActionsRenderer = () => <Example />;

class AppBar extends PureComponent {
  static options = {
    brand: _ => <a>CWDS-CARES</a>,
    actions: defaultActionsRenderer,
  };
  static propTypes = {
    brand: PropTypes.func,
    actions: PropTypes.func,
  };
  static config(opts) {
    AppBar.options = {
      ...AppBar.options,
      ...opts,
    };
  }
  constructor(props) {
    super(props);
    this.renderBrand = this.renderBrand.bind(this);
  }
  renderBrand() {
    const { brand } = this.props;
    return brand ? brand() : AppBar.options.brand();
  }
  renderActions() {
    const { actions, ...props } = this.props;
    return actions ? actions(props) : AppBar.options.actions(props);
  }
  render() {
    const { actions, ...props } = this.props;
    return (
      <div className={cn(styles.AppBar)}>
        <Container>
          <Row style={{ alignItems: 'center' }}>
            <Col>{this.renderBrand()}</Col>
            <Col className="text-right">{this.renderActions()}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AppBar;
