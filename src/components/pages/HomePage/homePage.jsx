import React, { Component } from 'react';
import tw, { styled } from 'twin.macro';
import ProductGird from '../../sections/ProductGrid/ProductGrid';
import Navbar from '../../sections/Navbar/Navbar'; 

const HomePage = () => {
	return (
		<Container>
            <Navbar />
			<ProductGird />
		</Container>
	);
};

export default HomePage;

const Container = tw.div``;