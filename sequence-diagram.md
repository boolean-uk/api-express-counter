sequenceDiagram
    participant Client
    participant Server
    participant Counter

    Note over Client,Server: GET /counter
    Client->>Server: GET /counter
    Server->>Counter: Get current value
    Counter-->>Server: Return value
    Server-->>Client: Response with counter value

    Note over Client,Server: POST /counter
    Client->>Server: POST /counter
    Server->>Counter: Increment value
    Counter-->>Server: Return new value
    Server-->>Client: Response with new counter value

    Note over Client,Server: DELETE /counter
    Client->>Server: DELETE /counter
    Server->>Counter: Reset to 0
    Counter-->>Server: Return reset value
    Server-->>Client: Response with reset counter value