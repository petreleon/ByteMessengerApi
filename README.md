# ByteMessengerApi

Byte Messenger has to be a simplified messenger:
- REST-like API
- Presence: emoji and description
- Conversation rooms with users and their last seen dates.
- Messages: doubly linked list, each element contain:
  - content
  - the date of sending
- HTTP protocol 
Security:
- JWT authentification, each containing the id of the user
- Each user has a global role and rooms' roles.
