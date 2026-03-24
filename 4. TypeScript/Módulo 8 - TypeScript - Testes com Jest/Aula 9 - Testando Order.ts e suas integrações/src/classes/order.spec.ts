import { CartItem } from "../interfaces/CartItem";
import { CustomerOrder } from "../interfaces/CustomerInterface";
import { MessagingInterface } from "../interfaces/MessagingInterface";
import { PersistencyInterface } from "../interfaces/PersistencyInterface";
import { ShoppingCartInterface } from "../interfaces/ShoppingCartInterface";
import { Order } from "./Order";

describe('Order', () => {
  const GENERIC_PRODUCT: CartItem = { name: 'Camiseta', price: 10 };

  let cartMock: jest.Mocked<ShoppingCartInterface>;
  let messagingMock: jest.Mocked<MessagingInterface>;
  let persistencyMock: jest.Mocked<PersistencyInterface>;
  let customerMock: jest.Mocked<CustomerOrder>;
  let sut: Order;

  beforeEach(() => {
    cartMock = {
      items: [] as CartItem[],
      addItem: jest.fn(),
      removeItem: jest.fn(),
      total: jest.fn().mockReturnValue(10),
      totalWithDiscount: jest.fn().mockReturnValue(5),
      isEmpty: jest.fn().mockReturnValue(false), // padrão: carrinho cheio
      clear: jest.fn(),
    };

    messagingMock = { sendMessage: jest.fn() };
    persistencyMock = { saveOrder: jest.fn() };
    customerMock = {
      getName: jest.fn().mockReturnValue('John Doe'),
      getIDN: jest.fn().mockReturnValue('123.456.789-00'),
    };

    sut = new Order(cartMock, messagingMock, persistencyMock, customerMock);
  });

  it('should not checkout if cart is empty', () => {
    cartMock.isEmpty.mockReturnValueOnce(true); // ✅ sobrescreve só nesse teste

    sut.checkout();

    expect(messagingMock.sendMessage).not.toHaveBeenCalled();
    expect(persistencyMock.saveOrder).not.toHaveBeenCalled();
    expect(cartMock.clear).not.toHaveBeenCalled();
  });

  it('should checkout if cart is not empty', () => {
    // isEmpty já é false no beforeEach — não precisa de arrange
    sut.checkout();

    expect(messagingMock.sendMessage).toHaveBeenCalled();
    expect(persistencyMock.saveOrder).toHaveBeenCalled();
    expect(cartMock.clear).toHaveBeenCalled();
  });

  it('should send message with correct total', () => {
    cartMock.total.mockReturnValue(100);

    sut.checkout();

    expect(messagingMock.sendMessage).toHaveBeenCalledWith(
      expect.stringContaining('100'),
    );
  });

  it('should close order status after checkout', () => {
    sut.checkout();
    expect(sut.orderStatus).toBe('closed');
  });
});