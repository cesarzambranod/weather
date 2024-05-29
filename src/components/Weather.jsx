import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormControl, Spinner, Alert } from 'react-bootstrap';
import useAxios from '../hook/useAxios';

const Weather = () => {
  const [city, setCity] = useState('Madrid');
  const [url, setUrl] = useState('');
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    if (city) {
      const newUrl = `${weatherUrl}?q=${city}&appid=${apiKey}&units=metric`;
      setUrl(newUrl);
    }
  }, [city, apiKey]);

  const { data, loading, error } = useAxios(url);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="my-4">Weather App</h1>
          <Form>
            <FormControl
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city"
              className="mb-3"
            />
          </Form>
          {loading && <Spinner animation="border" />}
          {error && !loading && !data && <Alert variant="danger">Error: {error.message}</Alert>}
          {data && (
            <div className="mt-4">
              <h3>Weather in {data.name}</h3>
              <p>Temperature: {data.main.temp} °C</p>
              <p>Feels like: {data.main.feels_like} °C</p>
              <p>Condition: {data.weather[0].description}</p>
              <p>Clouds: {data.clouds.all} %</p>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.description} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
