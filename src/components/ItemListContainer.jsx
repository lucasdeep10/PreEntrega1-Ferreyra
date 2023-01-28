import { Container, Card, CardHeader, CardBody, CardFooter, Spacer, Heading, Button, Text } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = () => {
  return (
    <Container>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Plan Básico</Heading>
        </CardHeader>
        <CardBody>
          <Text align='center'> Sitio de una sola página, son sitios con el fin de tener presencia de internet cuando se dispone de poco material. </Text>
        </CardBody>
        <CardFooter>
         <Button colorScheme='blue'>Agregar</Button>
        </CardFooter>
      </Card>
      <Spacer />
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Plan Standar</Heading>
        </CardHeader>
        <CardBody>
          <Text align='center'> Sitios de hasta 4/5 páginas. Mientras más páginas tenga el sitio más contenido incluye y favorece al SEO. </Text>
        </CardBody>
        <CardFooter>
         <Button colorScheme='blue'>Agregar</Button>
        </CardFooter>
      </Card>
      <Spacer />
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Plan Premium</Heading>
        </CardHeader>
        <CardBody>
          <Text align='center'> Son sitios de hasta 5 o 6 secciones / páginas. Incluye un catálogo que puede contener productos, trabajos, etc. </Text>
        </CardBody>
        <CardFooter>
         <Button colorScheme='blue'>Agregar</Button>
        </CardFooter>
      </Card>
      <Spacer />
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Plan E-Commerce </Heading>
        </CardHeader>
        <CardBody>
          <Text align='center'> Son sitios de hasta 7, u 8 secciones / páginas. Incluye catálogo de productos con gestión de pedidos y venta online. </Text>
        </CardBody>
        <CardFooter>
         <Button colorScheme='blue'>Agregar</Button>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default ItemListContainer