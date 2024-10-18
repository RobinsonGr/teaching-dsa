def solveNQueens(n):
    def isSafe(board, row, col):
        # Check the current column for other queens
        for i in range(row):
            if board[i][col] == 'Q':
                return False

        # Check upper-left diagonal for other queens
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False

        # Check upper-right diagonal for other queens
        for i, j in zip(range(row, -1, -1), range(col, n)):
            if board[i][j] == 'Q':
                return False

        return True

    def solve(board, row):
        if row == n:
            solution = [''.join(row) for row in board]
            solutions.append(solution)
            return

        for col in range(n):
            if isSafe(board, row, col):
                board[row][col] = 'Q'  # Place queen
                solve(board, row + 1)  # Move to next row
                board[row][col] = '.'  # Backtrack

    solutions = []
    board = [['.' for _ in range(n)] for _ in range(n)]
    solve(board, 0)
    return solutions


