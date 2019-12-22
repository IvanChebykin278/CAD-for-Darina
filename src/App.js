import React, {useState} from 'react';
import './App.css';
import Scene from './scene';
import C from './constants';

import Input from './components/Input';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

function App() {

  const [scene, setScene] = useState(new Scene());
  const [transfer, setTransfer] = useState({ 
    [C.TX]: 0, 
    [C.TY]: 0, 
    [C.TZ]: 0 
  });
  const [scale, setScale] = useState({
    [C.TX]: 1, 
    [C.TY]: 1, 
    [C.TZ]: 1 
  });
  const [rotate, setRotate] = useState({
    [C.TX]: 0, 
    [C.TY]: 0, 
    [C.TZ]: 0 
  });
  const [shift, setShift] = useState(0);
  const [focus, setFocus] = useState(0);

  // press draw
  const pressDraw = event => {
    scene.draw();
  };

  // press sweep
  const pressSweep = event => {
    scene.setSweep();
  }

  // press default
  const pressDefault = event => {
    scene.setDefault();
  };

  // press open file
  const pressOpenFile = event => {
    document
      .forms['uploadForm']
      .elements['uploadInput']
      .files[0]
      .text()
      .then(text => {
        scene.uploadScene(text);
      });
  };

  /*Хандлеры матриц преобразования*/

  // press transfer
  const pressTransfer = name => {
    scene.addTransferMatrix(
      transfer[name],
      name
    );
    scene.draw();
  };

  // press scale
  const pressScale = name => {
    scene.addScaleMatrix(
      scale[name],
      name
    );
    scene.draw();
  };

  // press rotate
  const pressRotate = name => {
    scene.addRotateMatrix(
      rotate[name],
      name
    );
    scene.draw();
  };

  // press shift
  const pressShift = event => {
    scene.addShiftMatix(shift);
    scene.draw();
  };

  // press focus
  const pressFocus = event => {
    scene.addFocusMatrix(focus);
    scene.draw();
  }

  // change transfer
  const changeTrasfer = event => {
    setTransfer({
      ...transfer,
      [event.target.name]: Number(event.target.value)
    });
  };


  // change scale
  const changeScale = event => {
    setScale({
      ...scale,
      [event.target.name]: Number(event.target.value)
    });
  };

  // change rotate
  const changeRotate = event => {
    setRotate({
      ...rotate,
      [event.target.name]: Number(event.target.value)
    });
  };

  // change shift
  const changeShift = event => {
    setShift(Number(event.target.value));
  };

  // change focus
  const changeFocus = event => {
    setFocus(Number(event.target.value));
  }

  const btn = {
    marginRight: '2.5px',
    marginLeft: '2.5px'
  }

  return (
    <main id='app'>
      <Box id='drower'>
        <canvas 
          id='canvas'
          width='1305'
          height='470'>
        </canvas>
      </Box>
      <Box id='fanctions'>
        <Card className='btn-group' raised>
          <CardContent>
            <Button style={btn} variant="contained" color="primary" onClick={pressDraw}>Отрисовать</Button>
            <Button style={btn} variant="contained" color="primary" onClick={pressOpenFile}>Загрузить файл</Button>
            <Button style={btn} variant="contained" color="primary" onClick={pressSweep}>Вписать в экран</Button>
            <Button style={btn} variant="contained" color="primary" onClick={pressDefault}>Исходное состояние</Button>
          </CardContent>
          <CardActions>
            <form name='uploadForm'>
              <input name='uploadInput' type='file' />
            </form>
          </CardActions>
        </Card>
        <Card className='func-group' raised>
          <CardContent>
            <Typography>Сдвиг</Typography>
            <Input name={C.TX} label="ось Х" onChange={changeTrasfer} onClick={pressTransfer} />
            <Input name={C.TY} label="ось Y" onChange={changeTrasfer} onClick={pressTransfer} />
            <Input name={C.TZ} label="ось Z" onChange={changeTrasfer} onClick={pressTransfer} />
          </CardContent>
        </Card>
        <Card className='func-group' raised>
          <CardContent>
            <Typography>Поворот</Typography>
            <Input name={C.TX} label="ось Х" onChange={changeRotate} onClick={pressRotate} />
            <Input name={C.TY} label="ось Y" onChange={changeRotate} onClick={pressRotate} />
            <Input name={C.TZ} label="ось Z" onChange={changeRotate} onClick={pressRotate} />
          </CardContent>
        </Card>
        <Card className='func-group' raised>
          <CardContent>
            <Typography>Масштаб</Typography>
            <Input name={C.TX} label="ось Х" onChange={changeScale} onClick={pressScale} />
            <Input name={C.TY} label="ось Y" onChange={changeScale} onClick={pressScale} />
            <Input name={C.TZ} label="ось Z" onChange={changeScale} onClick={pressScale} />
          </CardContent>
        </Card>
        <Card className='func-group' raised>
          <CardContent>
            <Typography>ОПП</Typography>
            <Input name={C.TX} label="ось Х" onChange={changeFocus} onClick={pressFocus} />
          </CardContent>
        </Card>
        <Card className='func-group' raised>
          <CardContent>
            <Typography>Косой сдвиг</Typography>
            <Input name={C.TY} label="ось Y" onChange={changeShift} onClick={pressShift} />
          </CardContent>
        </Card>
      </Box>
    </main>
  );
}

export default App;
