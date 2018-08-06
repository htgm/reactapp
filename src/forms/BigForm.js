import React, { Component } from 'react';
import Form from '../controls/Form';
import TitlePane from '../controls/TitlePane';
import ButtonPane from '../controls/ButtonPane';
import Container from '../controls/Container';

export default class BigForm extends Component {

  render() {
    return (
      <Form opened={this.props.opened}>
        <TitlePane>Title</TitlePane>
        <Container>
        <div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sem urna. Nam ac diam vel velit congue venenatis. Phasellus interdum sapien et odio pellentesque, ac pellentesque lacus pharetra. Proin a metus iaculis, molestie ligula non, accumsan nulla. Maecenas ut nibh et ipsum faucibus accumsan nec eget eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc a elit lobortis, eleifend sem blandit, aliquam lorem. Ut ullamcorper diam eu orci pretium, nec luctus dui lobortis. Maecenas tortor libero, malesuada in varius et, eleifend nec lorem. Integer sed nibh ipsum. Praesent tortor mauris, viverra eget diam sed, iaculis sagittis lorem.
</div>

<div>
Donec vel bibendum risus. Nam commodo nisi eu urna lacinia suscipit ut a turpis. Curabitur fermentum mi nulla, vel feugiat orci hendrerit sit amet. Mauris euismod sodales nibh, quis rhoncus sapien vehicula gravida. Phasellus vehicula tellus et magna ultricies cursus. Phasellus porta sit amet ex non feugiat. Ut nec leo quis ipsum condimentum venenatis. Nam vel felis vitae magna semper blandit a in orci. Aenean elementum turpis quis neque varius molestie.
</div>

<div>
Donec maximus diam at magna finibus, sit amet pretium nisi maximus. Curabitur aliquam, dui quis hendrerit luctus, risus nulla aliquet ipsum, ac volutpat erat lorem in diam. Donec elit risus, euismod vitae nibh vitae, tristique iaculis enim. Donec a tincidunt sapien. Vestibulum et diam velit. Aliquam finibus, nulla id pharetra volutpat, magna ligula pulvinar velit, sed euismod nisi tellus eget tellus. Praesent nec nisl eget justo aliquam gravida non eget diam. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In feugiat lacinia scelerisque. Etiam nisl nisi, placerat sit amet dolor porttitor, rhoncus gravida erat. Duis erat massa, posuere eu bibendum vel, blandit quis justo. Donec ullamcorper dignissim ligula sit amet porta. Aliquam in velit enim. Cras aliquam id tortor vel sagittis.
</div>

<div>
Donec non bibendum sem. Morbi sit amet odio purus. Sed vitae elit id erat eleifend venenatis ac vel nunc. Vivamus sagittis lacinia lectus sed tincidunt. Mauris ac ipsum vehicula, scelerisque nisl quis, suscipit turpis. Suspendisse potenti. Integer egestas ligula massa, varius auctor turpis vulputate et. Nulla venenatis vestibulum purus, quis faucibus erat porttitor sit amet. Mauris sapien massa, tempus ultricies diam a, laoreet facilisis eros. Aenean consectetur pharetra nunc eget commodo. Nunc porta nec eros in luctus. Suspendisse ut urna nec dolor hendrerit euismod faucibus vitae justo.
</div>

<div>
Nam metus eros, blandit ac pretium venenatis, feugiat id leo. Quisque at mollis odio, vitae euismod lorem. Nullam congue diam ac leo tempus, sed blandit augue semper. Fusce non viverra nibh. Cras dictum fermentum massa non finibus. Etiam placerat nunc augue, eu tempor magna egestas ac. Nullam sagittis porttitor enim lobortis luctus. Suspendisse non est velit.
</div>
        </Container>
        <ButtonPane>
          <button>Cancel</button>
          <button>Ok</button>
        </ButtonPane>
      </Form>
    );
  }

}
