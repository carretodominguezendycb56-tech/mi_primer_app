import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100, // usuarios virtuales
  duration: '1m', // duración de la prueba
};

export default function () {
  http.get('https://tu-servidor.com/api/endpoint');
  sleep(1);
}
