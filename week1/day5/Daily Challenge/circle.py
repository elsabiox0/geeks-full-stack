import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be a positive number.")
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    def area(self):
        return math.pi * (self._radius ** 2)

    def __str__(self):
        return f"Circle(radius={self._radius}, diameter={self.diameter}, area={self.area():.2f})"

    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add another Circle")
        new_radius = self._radius + other._radius
        return Circle(radius=new_radius)

    def __gt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare with another Circle")
        return self._radius > other._radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare with another Circle")
        return self._radius == other._radius


def draw_circle(circ):
    screen = turtle.Screen()
    t = turtle.Turtle()
    t.speed(2)
    t.penup()
    t.goto(0, -circ.radius)
    t.pendown()
    t.circle(circ.radius)
    turtle.done()
    screen.bye()  # Ferme la fenêtre Turtle après le dessin


def main():
    circle1 = Circle(radius=5)
    circle2 = Circle(diameter=10)
    circle3 = Circle(radius=3)
    
    print(circle1)
    print(circle2)
    
    new_circle = circle1 + circle3
    print(f"New Circle after adding: {new_circle}")
    
    print(circle1 > circle3)
    print(circle1 == circle2)
    
    circles = [circle1, circle2, circle3]
    circles.sort(key=lambda x: x.radius)
    print("Sorted Circles:")
    for circle in circles:
        print(circle)
    
    for circle in circles:
        draw_circle(circle)


if __name__ == '__main__':
    main()
