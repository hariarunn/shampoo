import React from 'react';
import { render } from '@testing-library/react';
import Cart from './cart';

const mockCartItems = [{
    "productId": 1,
    "quantity": 2
}, {
    "productId": 2,
    "quantity": 7
}];

const mockProducts = [{
    "id": 1,
    "name": "Face Masks",
    "price": 2.5,
    "unit": null,
    "image": ""
},
{
    "id": 2,
    "name": "Toilet Paper",
    "price": 0.65,
    "unit": "roll",
    "image": ""
}];

test('render shooping ncart correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    expect(dom.getByTestId("cart")).toBeInTheDocument();
});

test('show cart item correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    // get cart item with product ID = 1 (i.e. Face Masks)
    const faceMaskItem = dom.getByTestId('item-1');
    expect(faceMaskItem).toBeInTheDocument();
});

test('show cart item quantity correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    // get cart item with product ID = 1 (i.e. Face Masks)
    const faceMaskItem = dom.getByTestId('item-quantity-1');
    expect(faceMaskItem).toHaveTextContent("2");
});

test('show unit cost correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    const faceMaskItem = dom.getByTestId('item-unit-cost-1');
    expect(faceMaskItem).toHaveTextContent('£2.50');
});

test('show total cost of item correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    const faceMaskItem = dom.getByTestId('item-total-cost-1');
    expect(faceMaskItem).toHaveTextContent('£5.00');
});

test('show discount correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    const faceMaskItem = dom.getByTestId('item-discount-1');
    expect(faceMaskItem).toHaveTextContent('£1.00');
});

test('show total amount correctly', () => {
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={() => {}}
        />
    );
    const total = dom.getByTestId('total-amount');
    expect(total).toHaveTextContent('£7.90');
});

test('click remove button trigger function correctly', () => {
    const mockFn = jest.fn();
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={mockFn}
            addProductToCart={() => {}}
        />
    );
    dom.getByTestId("remove-button-1").click();
    expect(mockFn).toHaveBeenCalledTimes(1);
});

test('click add button trigger function correctly', () => {
    const mockFn = jest.fn();
    const dom = render(
        <Cart 
            cartItems={mockCartItems} 
            products={mockProducts}
            removeProductFromCart={() => {}}
            addProductToCart={mockFn}
        />
    );
    dom.getByTestId("add-button-1").click();
    expect(mockFn).toHaveBeenCalledTimes(1);
});