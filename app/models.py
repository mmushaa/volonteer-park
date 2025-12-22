from app import db
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import String, Integer, BigInteger, ForeignKey, DateTime, Float, func
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    login: Mapped[str] = mapped_column(String(255), nullable=False)
    first_name: Mapped[str] = mapped_column(String(255), nullable=False)
    last_name: Mapped[str] = mapped_column(String(255), nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    avatar_emoji: Mapped[str] = mapped_column(String(255), nullable=True)
    hours: Mapped[int] = mapped_column(Integer, default=0, nullable=True)
    events_text: Mapped[str] = mapped_column(String(255), nullable=True)

    # Relationships
    events: Mapped[list['Event']] = relationship(
        'Event', back_populates='user')

    def __repr__(self) -> str:
        return f'<User {self.id}>'


class Park(db.Model):
    __tablename__ = 'parks'

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(String(4095), nullable=False)
    location: Mapped[str] = mapped_column(String(255), nullable=True)
    image_src: Mapped[str] = mapped_column(String(255), nullable=True)
    rating: Mapped[float] = mapped_column(Float, nullable=True)
    hours: Mapped[str] = mapped_column(String(255), nullable=True)
    metro: Mapped[str] = mapped_column(String(255), nullable=True)
    founded: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        server_default=func.now()
    )
    audioguide_description: Mapped[str] = mapped_column(
        String(4095), nullable=True)

    def __repr__(self) -> str:
        return f'<Park {self.id}>'


class Event(db.Model):
    __tablename__ = 'events'

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(String(4095), nullable=False)
    location: Mapped[str] = mapped_column(String(255), nullable=True)
    start_time: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        server_default=func.now()
    )
    end_time: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False
    )

    # Relationships
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey('users.id'))
    user: Mapped[User] = relationship('User', back_populates='events')

    def __repr__(self) -> str:
        return f'<Event {self.id}>'
