<h1 style="text-align: center"> Todo Server
</h1>

<p>프론트엔드 상태를 관리하기 위해 만든 Todo server 입니다.</p>

- API

  - Get (/todo) - 학습지 리스트 조회
  - Get (/todo/:id) - 학습지 상세 조회
  - Post (/todo) - 학습지 생성
  - Update (/:id) - 학습지 업데이트
  - Delete (/:id) - 학습지 삭제

- Type
  ```JS
  class Todo {
    id: number,
    title: string,
    completed: boolean
  }
  ```

---

TODO

- 탄력적 api 적용해서 배포마다 안바뀌게 하기
- Todo 뿐만 아니라 좀 더 큰 서비스로 만들어보기
